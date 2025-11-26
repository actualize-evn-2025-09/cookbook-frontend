export function RecipesNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // prevents the browser's default behavior
    // preventing the browser from refreshing 
    const form = event.target;
    const params = new FormData(form);
    onCreate(params);
    form.reset();
  }

  return (
    <div id="recipes-new">
      <h1>New Recipe</h1>
      <form onSubmit={handleSubmit} >
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Chef: <input name="chef" type="text" />
        </div>
        <div>
          Image URL: <input name="image_url" type="text" />
        </div>
        <button type="submit">Create recipe</button>
      </form>
    </div>
  );
}
