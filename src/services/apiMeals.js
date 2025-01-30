import axios from "axios";

export async function getInitialMeals() {
  try {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    console.log(response);
    return response
  } catch (error) {
    console.error(error);
  }
}

export async function getAllCategories() {
    try {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
      console.log(response);
      return response
    } catch (error) {
      console.error(error);
    }
}
  

export async function getMealsByCategory(category) {
    console.log(category)
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      console.log(response);
      return response
    } catch (error) {
      console.error(error);
    }
}

export async function getMealDetails(id) {

    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      console.log(response);
      return response
    } catch (error) {
      console.error(error);
    }
}
