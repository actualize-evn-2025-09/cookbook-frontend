export function RecipesShow({ onUpdate, recipe, onDestroy }) {
  const userId = localStorage.getItem("userId");
  const admin = localStorage.getItem("admin") === "true";
  const isOwner = userId && Number(userId) === recipe.user_id;
  const canEdit = admin || isOwner;

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

      <div className="mb-3">
        <strong>Tags: </strong>
        {recipe.tags && recipe.tags.length > 0 ? (
          recipe.tags.map((tag) => (
            <span key={tag.id} className="badge bg-info me-1">
              {tag.name}
            </span>
          ))
        ) : (
          <span className="text-muted">No tags</span>
        )}
      </div>

      {canEdit && (
        <>
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
        </>
      )}
    </div>
  )
}
