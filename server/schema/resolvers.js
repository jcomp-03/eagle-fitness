const {Workout, User, Meal} = require('../models')

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
    }
  },
  Mutation: {
    addUser: async(parent, args) => {
      const newUser = await User.create(args)
      return newUser
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
    }
  }
}

module.exports = resolvers