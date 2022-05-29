const db = require('./db');
const { User, Meal, Workout } = require('../models');

db.once('open', async () => {
  await Meal.deleteMany();

  await Meal.insertMany([
    { mealName: "Chicken and waffles", totalCalories: 100, ingredients: ["chicken", "waffles", "syrup"] },
    { mealName: "Chicken Sandwhich", totalCalories: 200, ingredients: ["chicken", "bread", "pickle"] },
    { mealName: "Pasta", totalCalories: 300, ingredients: ["angel hair pasta", "pasta sauce"] },
    { mealName: "Pizza", totalCalories: 400, ingredients: ["Cheese", "Sauce", "Pepperoni"] },
    { mealName: "Mac and cheese", totalCalories: 500, ingredients: ["Pasta elbows", "cheese"] }
  ]);

  console.log('Meals seeded');

  await Workout.deleteMany();

  await Workout.insertMany([
    {
      name: "Squats",
      workoutDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue sagittis eros suscipit tincidunt. Pellentesque in mollis neque. Etiam.",
      workoutType: "type1"
    },
    {
      name: "Lunges",
      workoutDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue sagittis eros suscipit tincidunt. Pellentesque in mollis neque. Etiam.",
      workoutType: "type2"
    },
    {
      name: "Jumping Jacks",
      workoutDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue sagittis eros suscipit tincidunt. Pellentesque in mollis neque. Etiam.",
      workoutType: "type3"
    },
    {
      name: "Burpees",
      workoutDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue sagittis eros suscipit tincidunt. Pellentesque in mollis neque. Etiam.",
      workoutType: "type4"
    },
    {
      name: "Pushups",
      workoutDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue sagittis eros suscipit tincidunt. Pellentesque in mollis neque. Etiam.",
      workoutType: "type5"
    },
    {
      name: "Abdominal Crunches",
      workoutDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue sagittis eros suscipit tincidunt. Pellentesque in mollis neque. Etiam.",
      workoutType: "type6"
    },
  ]);

  console.log('Workouts seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    username: "Pam_Pam",
    email: 'pamela@testmail.com',
    password: 'password12345',
    workoutPersona: "Casual",
    age: 22,
    aboutMe: "Lorem ipsum dolor sit amet. Qui harum vel nulla amet non recusandae voluptatem! Vel numquam adipisci qui quam expedita cum mollitia beatae cum voluptas dolorum aut earum odio ad sequi dolore. Et ullam ipsam ut voluptatem molestiae id sequi tempore. Vel ipsum quia 33 sequi suscipit rem soluta atque At omnis nostrum eos unde quas nam odio unde."
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    username: "E_Holt",
    email: 'eholt@testmail.com',
    password: 'password12345',
    workoutPersona: "Gym Rat",
    age: 24,
    aboutMe: "Lorem ipsum dolor sit amet. Qui harum vel nulla amet non recusandae voluptatem! Vel numquam adipisci qui quam expedita cum mollitia beatae cum voluptas dolorum aut earum odio ad sequi dolore. Et ullam ipsam ut voluptatem molestiae id sequi tempore. Vel ipsum quia 33 sequi suscipit rem soluta atque At omnis nostrum eos unde quas nam odio unde."
  });

  await User.create({
    firstName: 'Alex',
    lastName: 'Noble-James',
    username: "Alex_NJ",
    email: 'alex@testmail.com',
    password: 'password12345',
    workoutPersona: "Couch Potato",
    age: 21,
    aboutMe: "Lorem ipsum dolor sit amet. Qui harum vel nulla amet non recusandae voluptatem! Vel numquam adipisci qui quam expedita cum mollitia beatae cum voluptas dolorum aut earum odio ad sequi dolore. Et ullam ipsam ut voluptatem molestiae id sequi tempore. Vel ipsum quia 33 sequi suscipit rem soluta atque At omnis nostrum eos unde quas nam odio unde."
  });

  console.log('users seeded');

  process.exit();
});
