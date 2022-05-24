const {Schema, model} = require('mongoose')

// const IngredientSchema = new Schema(
//   {
//     ingredientName: {
//       type: Array,
//       required: true
//     }
//   }
// )

// The meals themselves will be taken from an external API call.
// any additional information about the meals will be added to the schema
const MealSchema = new Schema(
  {
    mealName: {
      type:String,
      required: true,
      trim:true
    },
    totalCalories: {
      type: Number,
      required: true
    },
    ingredients: {
      type: Array,
      required: true
    }
  }
)

const Meal = model('meal', MealSchema)

module.exports = Meal