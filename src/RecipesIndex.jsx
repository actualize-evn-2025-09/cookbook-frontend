export function RecipesIndex({ recipesProp, onShow }) {
  return (
    <div id="recipes-index">
      <h1>All {recipesProp.length} Recipes</h1>
      <div className="row row-cols-3 row-cols-md-4 g-4">
        {recipesProp.map((recipe) => (
          <div key={recipe.id} className="col">
            <div className="card h-100">
              <img src={recipe.image_url} className="card-img-top object-fit-cover" style={{ height: "200px"}} alt="..." />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">Chef: {recipe.chef}</p>
                <button className="btn btn-primary" onClick={() => onShow(recipe)}>More Info</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
