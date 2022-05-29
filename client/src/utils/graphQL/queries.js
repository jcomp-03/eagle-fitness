<<<<<<< HEAD:client/src/utils/graphQL/queries.js
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
=======
import {gql} from '@apollo/client'

export const QUERY_ME = gql`
query me($id: ID!) {
  me(_id: $id) {
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
>>>>>>> dev-lp:client/fitness/src/utils/graphQL/queries.js
`