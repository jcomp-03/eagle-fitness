import {gql} from '@apollo/client'

export const QUERY_ME = gql`
query me {
  me {
    _id
    firstName
    lastName
    username
    email
    meals {
      mealName
      totalCalories
      ingredients
    }
    workouts {
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