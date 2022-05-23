const {Schema, model} = require('mongoose')

const WorkoutSchema = new Schema( 
  {
    name: {
      type: Schema,
      required: true
    },
    workoutType: {
      type: String,
      required: true
    }
  }
)

const Workout = model('workout', WorkoutSchema)

module.exports = Workout