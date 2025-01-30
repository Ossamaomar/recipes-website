/* eslint-disable react/prop-types */
import { BiWorld } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

function MealItem({meal}) {
    const navigate = useNavigate();

    return (
        <li className="meal-item"> 
            <img src={meal.strMealThumb} alt="" />
            <h3 className="name">{meal.strMeal.split(" ").splice(0, 2).join(" ")}</h3>
            <h5 className="country"><BiWorld /> <span>{meal.strArea}</span></h5>
            <button onClick={() => navigate(`/mealdetails/${meal.idMeal}`)} className="btn">View Recipe</button>
        </li>
    )
}

export default MealItem
