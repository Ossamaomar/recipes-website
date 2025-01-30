/* eslint-disable react/prop-types */

import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getMealDetails } from "../../services/apiMeals";
import { FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Ingredients from "../../components/Ingredients";
import LoadingSkeleton2 from "../../components/LoadingSkeleton2";
import { useEffect } from "react";

function MealDetails() {
  const { mealId } = useParams();
  const navigate = useNavigate()

  const { data, isLoading } = useQuery({
    queryKey: ["mealDetails", mealId],
    queryFn: () => getMealDetails(mealId),
  });

  useEffect(() => {
      if (data?.data?.meals === "Invalid ID") {
        navigate("/"); 
      }
    }, [data, navigate]);

  if (isLoading) return <LoadingSkeleton2 />;
  console.log(data);
  
  const meal = data.data.meals[0];
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]?.trim();
    const measure = meal[`strMeasure${i}`]?.trim();

    if (!ingredient) break; 

    ingredients.push({ ingredient, measure: measure || "N/A" });
  }



  return (
    <>
    <h1>{meal.strMeal}</h1>
    <div className="meal-details flex flex-col gap-6 lg:flex-row lg:items-start justify-center">
      <div className="meal-info">
        
        <img src={meal.strMealThumb} className="w-full" alt="" />
        <div className="links">
          <button className="ytb-btn">
            <a href={meal.strYoutube}>
              <FaYoutube /> Youtube
            </a>
          </button>
          <button className="src-btn">
            <a href={meal.strSource}>
              <TbWorld /> Source
            </a>
          </button>
        </div>
      </div>

      <p>{data.data.meals[0].strInstructions}</p>

      <Ingredients ingredients={ingredients} />
    </div>
    </>
  );
}

export default MealDetails;
