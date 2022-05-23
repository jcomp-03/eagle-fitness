const {gql} = require('apollo-server-express')

const typeDefs = gql`
type User {
  _id: ID
  firstName: String
  lastName: String
  username: String
  email: String
  meals: [Meal]
}

type Meal {
  _id: ID
  mealName: String
  calories: Int
  ingredients: [Ingredients]
}

type Ingredients {
  ingredientName: String
}

type Query {
  me: User
  us: [User]
  meal (_id: ID!) : Meal
  meals: [Meal]
}
`

module.exports = typeDefs