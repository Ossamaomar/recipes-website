/* eslint-disable react/prop-types */
function IngredientItem({ ingredient, isLastIngredient }) {
  console.log(isLastIngredient);
  return (
    <>
      <div className="flex justify-between items-center">
        <p>{ingredient.ingredient}:</p>
        <p>{ingredient.measure}</p>
      </div>
      {!isLastIngredient && <div className="ingredient-underline"></div>}
    </>
  );
}

export default IngredientItem;
