export function RecipesIndex({ recipesProp, onShow }) {
  return (
    <div id="recipes-index">
      <h1>All {recipesProp.length} Recipes</h1>
      {recipesProp.map((recipe) => (
        <div key={recipe.id} className="recipes">
          <h2>{recipe.title}</h2>
          <img src={recipe.image_url} />
          <p>Chef: {recipe.chef}</p>
          <button onClick={() => onShow(recipe)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
