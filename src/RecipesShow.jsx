export function RecipesShow({ onUpdate, recipe, onDestroy }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    onUpdate(recipe, params);
    form.reset();
  }

  return (
    <div id="recipes-show">
      <h1>Recipe Info:</h1>
      <h2>{recipe.title}</h2>
      <p>Chef: {recipe.chef}</p>
      <hr />
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" defaultValue={recipe.title} type="text" />
        </div>
        <div>
          Chef: <input name="chef" defaultValue={recipe.chef} type="text" />
        </div>
        <div>
          Image URL: <input name="image_url" defaultValue={recipe.image_url} type="text" />
        </div>
        <button type="submit">Update Recipe</button>
      </form>
      <button onClick={() => onDestroy(recipe)}>Delete Recipe</button>
    </div>
  )
}
