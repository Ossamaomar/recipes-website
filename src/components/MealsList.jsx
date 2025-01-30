/* eslint-disable react/prop-types */

import MealItem from "./MealItem";
import { getInitialMeals, getMealsByCategory } from "../services/apiMeals";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import LoadingSkeleton1 from "./LoadingSkeleton1";
import { useNavigate } from "react-router-dom";

function MealsList({ categoryName }) {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["category", categoryName],
    queryFn: () => {
      if (!categoryName) return getInitialMeals();
      if (categoryName) return getMealsByCategory(categoryName);
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  useEffect(() => {
    localStorage.setItem("lastSelectedOption", categoryName);
  }, [categoryName]);

  // useEffect(() => {
  //   if (data?.data?.meals === null) {
  //     navigate("/"); 
  //   }
  // }, [data, navigate]);
  if (isLoading) return <LoadingSkeleton1 />;
  if (data?.data?.meals === null)   navigate("/"); 
  return (
    <ul className="meals-list sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-6">
      {data &&
        data.data.meals?.map((meal) => (
          <MealItem key={meal.idMeal} meal={meal} />
        ))}
    </ul>
  );
}

export default MealsList;
