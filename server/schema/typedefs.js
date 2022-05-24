const { gql } = require("apollo-server-express");

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
    totalCalories: Int
    ingredients: [String]
  }

  type Ingredients {
    ingredientName: String
  }

  type Query {
    me(_id: ID!): User
    us: [User]
    meal(_id: ID!): Meal
    meals: [Meal]
  }

  type Mutation {
    # mutation for signing up
    addUser(
      firstName: String!
      lastName: String!
      username: String!
      email: String!
      password: String!
    ): User

    # [mutation for logging in goes here]

    addIngredient(ingredientName: String!): Ingredients

    # Must add ingredients before meal

    addMeal(mealName: String!, totalCalories: Int!, ingredients: [String!]): Meal

    # Must add meal before UserMeal

    addUserMeal(userId: ID!, meal: ID!): User
  }
`;

module.exports = typeDefs;
