import IngredientItem from "./IngredientItem"

/* eslint-disable react/prop-types */
function Ingredients({ingredients}) {
    return (
        <div className="ingredients">
            <h3 className="">Ingredients</h3>

            {ingredients.map((ingredient, i) => <IngredientItem key={[ingredient.ingredient, ingredient.measure]} ingredient={ingredient} isLastIngredient={i === ingredients.length-1} />)}
        </div>
    )
}

export default Ingredients
