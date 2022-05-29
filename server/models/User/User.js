const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Meal = require("../Meals/Meals");
const Workout = require('../Workouts/Workouts');
const dateFormat = require("../../../client/fitness/src/utils/dateFormat");

const UserSchema = new Schema({
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
    type:String,
    required: true,
    maxlength: 15
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
    required: true
  },
  aboutMe: {
    type:String,
    required: true,
    minlength: 10
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  meals: [Meal.schema],
  workouts: [Workout.schema]
},
{
  toJSON: {
    getters: true
  }
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

