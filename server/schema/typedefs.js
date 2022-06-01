const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    createdAt: String
    firstName: String
    lastName: String
    username: String
    workoutPersona: String
    age: Int
    email: String
    aboutMe: String
    meals: [Meal]
    workouts: [Workout]
    milesRun: [Int]
    milesCycled: [Int]
    cumulativeMilesRun: [Int]
    cumulativeMilesCycled: [Int]
  }

  type Meal {
    _id: ID
    mealName: String
    totalCalories: Int
    ingredients: [String]
  }

  type Workout {
    _id: ID
    name: String
    workoutType: String
    workoutDescription: String,
    # startTime: String,
    # durationMinutes: Int
  }

  type Query {
    me: User
    us: [User]
    meal(_id: ID!): Meal
    meals: [Meal]
    workouts: [Workout]
  }

  type Auth {
    user: User
    token: ID
  }

  type Mutation {
    # mutation for signing up
    addUser(
      firstName: String!
      lastName: String!
      username: String!
      password: String!
      workoutPersona: String!
      age: Int!
      email: String!
      aboutMe: String!
    ): Auth

    login(email: String!, password: String!): Auth

    updateUser(
      firstName: String
      lastName: String
      username: String
      email: String
      password: String

    ): User

    addMeal(
      mealName: String!
      totalCalories: Int!
      ingredients: [String!]
    ): Meal

    # Must add meal before UserMeal

    addUserMeal(userId: ID!, meal: ID!): User

    addWorkout(
      name: String!
      workoutType: String!
      workoutDescription: String!
    ): Workout

    addUserWorkout(workout: ID!): User

    deleteUserWorkout(workout: ID!): User
    addUserWorkout(userId: ID!, workout: ID!): User

    updateMilesRunOrCycled(
      milesRun: [Int]
      milesCycled: [Int]
    ): User
  }
`;

module.exports = typeDefs;
