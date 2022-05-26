const { Workout, User, Meal } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  // eventually these will be changed to incorporate tokens from headers instead of args.userId

  Query: {
    me: async (parent,__, context) => {
      console.log(context.user)
      if (context.user) {
        // Must use findById to find a single entry
        const userData = await User.findById({ _id: context.user._id });
        if (!userData) {
          throw new Error("No user found!");
        }
        return userData;
      }
      throw new AuthenticationError("You must be logged in!");
    },
    us: async () => {
      return User.find();
    },
    meals: async () => {
      return Meal.find();
    },
    workouts: async () => {
      const workout = await Workout.find();
      console.log(workout);
      return workout;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const newUser = await User.create(args);
      return newUser;
    },
    login: async (parent, args) => {
      const user = await User.findOne({ email: args.email });
      // console.log(user)
      if (!user) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const auth = await user.isCorrectPassword(args.password);
      // console.log(auth);

      if (!auth) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    // MUST be done in the order: addMeal -> addUserMeal
    addMeal: async (parent, args) => {
      const newMeal = await Meal.create(args);
      return newMeal;
    },
    addUserMeal: async (parent, args, context) => {
      if (context.user) {
        const meal = await Meal.findById({ _id: args.meal });
        if (!meal) {
          throw new Error("This meal does not exist inthe database");
        }
        const newUserMeal = await User.findByIdAndUpdate(
          { _id: args.userId },
          { $addToSet: { meals: meal } },
          { new: true, runValidators: true }
        );
        console.log(newUserMeal);
        return newUserMeal;
      }
      throw new AuthenticationError("You must be logged in!");
    },
    addWorkout: async (parent, args) => {
      const newWorkout = await Workout.create(args);
      return newWorkout;
    },
    addUserWorkout: async (parent, args, context) => {
      if (context.user) {
        const workout = await Workout.findById({ _id: args.workout });
        const newUserWorkout = await User.findByIdAndUpdate(
          { _id: args.userId },
          { $addToSet: { workouts: workout } },
          { new: true, runValidators: true }
        );
        console.log(newUserWorkout);
        return newUserWorkout;
      }
      throw new AuthenticationError("You must be logged in!");
    },
  },
};

module.exports = resolvers;
