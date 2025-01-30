import { useQuery } from "@tanstack/react-query";
import MealsList from "../../components/MealsList";
import { getAllCategories } from "../../services/apiMeals";
import Filter from "../../components/Filter";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Category() {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return localStorage.getItem("lastSelectedOption") || ""; 
  });
  let {categoryName} = useParams();
  categoryName = categoryName !== undefined ? categoryName : ''
  const {data, isLoading} = useQuery({ 
    queryKey: ['categories'], 
    queryFn: getAllCategories,  
  })

  if (isLoading) return null

  return (
    <div className="category">
      <header>
        <h1 className="gradient-text mt-8 text-4xl font-bold  bg-gradient-to-r    via-[#ca1023c4] to-[#c90519]  bg-clip-text">
          Learn, Cook, Eat Your Food
        </h1>
      </header>
      <Filter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categories={data.data.categories}/>
      <MealsList categoryName={categoryName} selectedCategory={selectedCategory} />
    </div>
  );
}

export default Category;
