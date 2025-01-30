/* eslint-disable react/prop-types */

import MealItem from "./MealItem";
import { getInitialMeals, getMealsByCategory } from "../services/apiMeals";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";;
import LoadingSkeleton1 from "./LoadingSkeleton1";

function MealsList({ categoryName }) {
  // React Query Hook
  const { data, isLoading } = useQuery({
    queryKey: ["category", categoryName], // Unique cache key per option
    queryFn: () => {
      if (!categoryName) return getInitialMeals();
      if (categoryName) return getMealsByCategory(categoryName);
    },
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes before considering it stale
    cacheTime: 10 * 60 * 1000, // Keep data in cache for 10 minutes
  });

  useEffect(() => {
    localStorage.setItem("lastSelectedOption", categoryName);
  }, [categoryName]);

  if (isLoading) return <LoadingSkeleton1 />;
  console.log(data);
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
