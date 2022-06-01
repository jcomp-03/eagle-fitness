import { gql } from "@apollo/client";

// to be modified to handle JWT
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// to be used in user sign up
export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $password: String!
    $workoutPersona: String!
    $age: Int!
    $email: String!
    $aboutMe: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      password: $password
      workoutPersona: $workoutPersona
      age: $age
      email: $email
      aboutMe: $aboutMe
    ) {
      token
      user {
        _id
        firstName
        lastName
        username
        email
      }
    }
  }
`;
// adding meals to the database taken from API data, must be done before ADD_USER_MEAL
export const ADD_MEAL = gql`
  mutation addMeal(
    $mealName: String!
    $totalCalories: Int!
    $ingredients: [String!]
  ) {
    addMeal(
      mealName: $mealName
      totalCalories: $totalCalories
      ingredients: $ingredients
    ) {
      _id
      mealName
      totalCalories
      ingredients
    }
  }
`;
export const ADD_USER_MEAL = gql`
  mutation addUserMeal($userId: ID!, $meal: ID!) {
    addUserMeal(userId: $userId, meal: $meal) {
      username
      email
      meals {
        mealName
        totalCalories
        ingredients
      }
    }
  }
`;
export const ADD_WORKOUT = gql`
  mutation addWorkout(
    $name: String!
    $workoutDescription: String!
    $workoutType: String!
  ) {
    addWorkout(
      name: $name
      workoutDescription: $workoutDescription
      workoutType: $workoutType
    ) {
      _id
      name
      workoutType
      workoutDescription
    }
  }
`;
export const ADD_USER_WORKOUT = gql`
  mutation addUserWorkout($userId: ID!, $workout: ID!) {
    addUserWorkout(userId: $userId, workout: $workout) {
      username
      email
      meals {
        mealName
      }
      workouts {
        name
        workoutDescription
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $firstName: String
    $lastName: String
    $username: String
    $email: String
    $password: String
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      email
      firstName
      lastName
    }
  }
`;

export const DELETE_USER_WORKOUT = gql`
mutation deleteUserWorkout($workout: ID!) {
  deleteUserWorkout(workout: $workout) {
    username
    email
    workouts {
      name
      workoutDescription
      workoutType
    }
  }
}
`

export const DELETE_USER_MEAL = gql`
mutation deleteUserMeal($meal: ID!) {
  deleteUserMeal(meal: $meal) {
    username
    email
    meals {
      mealName
      ingredients
      _id
    }
  }
}
`