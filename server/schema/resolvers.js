const {Workout, User, Meal} = require('../models')
const {AuthenticationError} = require('apollo-server-express')

const resolvers = {
  // eventually these will be changed to incorporate tokens from headers instead of args.userId

  Query: {
    me: async (parent, {_id}) => {
      // Must use findById to find a single entry

      const userData = await User.findById({_id: _id})
      if (!userData) {
        throw new Error('No user found!')
      }
      return userData
    },
    us: async () => {
      return User.find()
    },
    meals: async() => {
      return Meal.find()
    },
    workouts: async() => {
      const workout = await Workout.find() 
      console.log(workout)
      return workout
    }
  },
  Mutation: {
    addUser: async(parent, args) => {
      const newUser = await User.create(args)
      return newUser
    },
    login: async(parent, args) => {
      const loginUser = await User.findOne({email: args.email})
      // console.log(loginUser)
      if (!loginUser) {
        throw new AuthenticationError('Incorrect Credentials')
      }

      const auth = await loginUser.isCorrectPassword(args.password)
      console.log(auth)

      if (!auth) {
        throw new AuthenticationError('Incorrect Credentials')
      }

      // remember to remove 1 and 2

      return loginUser
    },
    // MUST be done in the order: addMeal -> addUserMeal
    addMeal: async(parent, args) => {
      const newMeal = await Meal.create(args)
      return newMeal
    },
    addUserMeal: async(parent, args) => {
      const meal = await Meal.findById({_id: args.meal})
      const newUserMeal = await User.findByIdAndUpdate(
        {_id: args.userId},
        {$addToSet: {meals: meal}},
        {new: true, runValidators: true}
      )
      console.log(newUserMeal)
      return newUserMeal
    },
    addWorkout: async(parent, args) => {
      const newWorkout = await Workout.create(args)
      return newWorkout
    },
    addUserWorkout: async(parent, args) => {
      const workout = await Workout.findById({_id: args.workout})
      const newUserWorkout = await User.findByIdAndUpdate(
        {_id: args.userId},
        {$addToSet: {workouts: workout}},
        {new: true, runValidators: true}
      )
      console.log(newUserWorkout)
      return newUserWorkout
    }
  }
}

module.exports = resolvers