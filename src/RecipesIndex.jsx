export function RecipesIndex(props) {
  return (
    <div id="recipes-index">
      <h1>All {props.recipesProp.length} Recipes</h1>
      {props.recipesProp.map((recipe) => (
        <div key={recipe.id} className="recipes">
          <h2>{recipe.title}</h2>
          <img src={recipe.image_url} />
          <p>Chef: {recipe.chef}</p>
          <button onClick={() => props.onShow(recipe)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
