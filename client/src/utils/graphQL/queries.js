import {gql} from '@apollo/client'

export const QUERY_ME = gql`
query me {
  me {
    _id
    createdAt
    firstName
    lastName
    username
    workoutPersona
    email
    age
    aboutMe
    meals {
      _id
      mealName
      totalCalories
      ingredients
    }
    workouts {
      _id
      name
      workoutType
      workoutDescription
    }
  }
}
`
export const QUERY_US = gql`
query us {
  us {
    _id
    firstName
    lastName
    email
    username
    meals {
      mealName
    }
    workouts {
      name
    }
    
  }
}
`

export const QUERY_MEALS = gql`
query meals {
  meals {
    mealName
    ingredients
    _id
  }
}
`

export const QUERY_WORKOUTS = gql`
query workouts {
  workouts {
    _id
    name
    workoutDescription
    workoutType
  }
}
`