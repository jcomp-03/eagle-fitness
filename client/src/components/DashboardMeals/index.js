import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { ADD_MEAL, ADD_USER_MEAL } from "../../utils/graphQL/mutations";

export function DashboardMeals() {
  const [mealArray, setMealArray] = useState([]);
  // const [mealObjectToSave, setSaveObject] = useState({})
  const [addMeal] = useMutation(ADD_MEAL) 
  const [addUserMeal, {error}] = useMutation(ADD_USER_MEAL)

  // let meals

  // function getRecepies() {
  useEffect(()=> {
    fetch("https://api.spoonacular.com/recipes/complexSearch?fillIngredients=true&maxCalories=100&number=10&apiKey=1bd3421ddb074defbade8ad76e9f13ea")
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response
    })
    .then(data => {
      // console.log(data)
      setMealArray(data.results)
    })
  }, []);
  

  // }
  let meals = mealArray
  // console.log(meals)

  async function handleMealAdd(e) {
    console.log(e.target)
    // console.log(mealArray)
    const mealObject = {}
    const ingredientArray = []

    mealArray.forEach(meal => {
      if(parseInt(e.target.name) === meal.id) {
        mealObject["mealName"] = meal.title
        mealObject["totalCalories"] = Math.round(meal.nutrition.nutrients[0].amount)
      }
    })

    mealArray.forEach(meal => {
      if (parseInt(e.target.name) === meal.id) {
        if (meal.usedIngredientCount !== 0) {
          meal.usedIngredients.forEach(ingredient => {
            ingredientArray.push(ingredient.originalName)
          })
        } else if (meal.missedIngredientCount !== 0) {
          meal.missedIngredients.forEach(ingredient => {
            ingredientArray.push(ingredient.originalName)
          })
        } else {ingredientArray.push("No listed ingredients")}
      }
    }) 

    mealObject["ingredients"] = ingredientArray
    console.log(mealObject)

    try {
      const {data} = await addMeal({
        variables: {
          ...mealObject
        }
      })

      console.log(data)

      await addUserMeal({
        variables: {
          meal: data.addMeal._id
        }
      })

      window.location.replace('/profile')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="col-xl-12">
      <div className="card">
        <div className="card-header d-sm-flex d-block pb-0 border-0">
          <div className="mx-auto pr-3">
            <h4 className="text-black text-center font-w600 fs-20">Recommended Meals</h4>
          </div>
        </div>
        {meals.length ? (
          meals.map((meal) => (
            <div
              key={meal.id}
              className="d-flex border-bottom flex-wrap pt-3 list-row align-items-center mb-2"
            >
              <div className="col-xl-5 col-xxl-7 col-lg-6 col-sm-7 d-flex align-items-center">
                {/* <div class="list-icon bgl-primary mr-3 mb-3">
									<img src={meal.image} alt={`${meal.title}Image`}></img>	
								</div> */}
                <div className="info mb-3 activities">
                  <h4 className="fs-20 ">
                    <a href="workout-statistic.html" className="text-black">
                      {meal.title}
                    </a>
                  </h4>
                  <p className="text-dark font-weight-bold fs-20">
                    Ingredients:
                  </p>
                  <span className="pr-3 d-flex flex-wrap">
                    {meal.missedIngredients.map((ingredient) => (
                      <div className="d-flex flex-wrap">
                        <p className="mx-1">{ingredient.originalName}</p>
                      </div>
                    ))}
                  </span>
                </div>
              </div>
              <div className="col-xl-2 col-xxl-3 col-lg-2 col-sm-3 activities mb-3 mr-auto pl-3 pr-3 pt-3 text-sm-center col-6">
                <span className="text-dark text-center ml-2">
                  <strong className="text-center">Total Calories: {meal.nutrition.nutrients.map((nutrient) => (<p>{nutrient.amount}</p>))}</strong>
                </span>{" "}
                <br></br>
              </div>
              <div className="col-xl-5 col-xxl-2 col-lg-4 col-sm-2 d-flex justify-content-center align-items-center col-6">
                <div className="dropdown more-dropdown mb-3">
                  <a
                    href="javascript:void(0)"
                    className="more-button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      width="6"
                      height="26"
                      viewBox="0 0 6 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z"
                        fill="#585858"
                      ></path>
                      <path
                        d="M6 13C6 14.6569 4.65685 16 3 16C1.34315 16 0 14.6569 0 13C0 11.3431 1.34315 10 3 10C4.65685 10 6 11.3431 6 13Z"
                        fill="#585858"
                      ></path>
                      <path
                        d="M6 23C6 24.6569 4.65685 26 3 26C1.34315 26 0 24.6569 0 23C0 21.3431 1.34315 20 3 20C4.65685 20 6 21.3431 6 23Z"
                        fill="#585858"
                      ></path>
                    </svg>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                                  className="dropdown-item"
                                  name={meal.id}
                                  onClick={(e) => handleMealAdd(e)}
                                  href="javascript:void(0);"
                                >
                                  Add to your meal plan
                                </a>
                  </div>
                  {error && <p className="text-danger">There was a problem!</p>}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center font-weight-bold">
            Could not fetch recommended meals!
          </p>
        )}
      </div>
    </div>
  );
}
