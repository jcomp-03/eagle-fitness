const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Meal = require("../Meals/Meals");
const Workout = require("../Workouts/Workouts");
const dateFormat = require("../../../client/src/utils/dateFormat");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    workoutPersona: {
      type: String,
      required: true,
      maxlength: 15,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: {
        validator: function (input) {
          return input.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        },
        message: (input) => `"${input.value}" is not a valid email address`,
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    age: {
      type: Number,
      required: true,
    },
    aboutMe: {
      type: String,
      required: true,
      minlength: 10,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    meals: [Meal.schema],
    workouts: [Workout.schema],
    milesRun: [Number],
    milesCycled: [Number],
    cumulativeMilesRun: [Number],
    cumulativeMilesCycled: [Number],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// a virtual which returns an array of grouped sums of miles
UserSchema.virtual("getMilesRun").get(function () {
  if (this.milesRun.length > 25) {
    const truncatedArray = this.milesRun.slice(this.milesRun.length - 25);
    this.milesRun = [...truncatedArray];
  }
  // we're going to divvy up the instances of miles into groups of 5; store the remainder
  const remainder = this.milesRun.length % 5;
  let remainingItemsSummed = 0;
  // group last few values into one variable
  if (remainder) {
    remainingItemsSummed = myArray
      .slice(myArray.length - remainder)
      .reduce((prev, curr) => prev + curr);
  }
  // some variables to use in our for loop below
  let groupedArray = [];
  let runningSum = 0;
  // every 5 values, sum those values and push the sum to groupedArray; reset the runningSum
  for (let i = 0; i < myArray.length - remainder + 1; i++) {
    runningSum += myArray[i];
    if ((i + 1) % 5 === 0) {
      groupedArray.push(runningSum);
      runningSum = 0;
    }
  }
  // lastly, if remainder is not zero, push the remainder as a final item to groupedArray
  remainder ? groupedArray.push(remainingItemsSummed) : ""
  // set milesRun to the groupedArray
  this.milesRun = [...groupedArray]
  return this.milesRun;
});

// a virtual which returns an array of running cumulative miles run
UserSchema.virtual("getCumulativeMilesRun").get(function () {
  // Just add all the values (i.e. miles) in the array milesRun
  const totalMilesRunToDate = this.milesRun.reduce((prev, curr) => prev + curr);
  // now, update the array cumulativeMilesRun by pushing latest tally of total miles
  this.cumulativeMilesRun = [...this.cumulativeMilesRun, totalMilesRunToDate];
  // keep the array cumulativeMilesRun to a max length of 5
  if (this.cumulativeMilesRun.length > 5) {
    const truncatedArray = this.cumulativeMilesRun.slice(
      this.cumulativeMilesRun.length - 5
    );
    this.cumulativeMilesRun = [...truncatedArray];
  }
  // return the array
  return this.cumulativeMilesRun;
});

UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("user", UserSchema);

module.exports = User;
