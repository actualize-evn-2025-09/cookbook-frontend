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
        <div className="mb-3">
          Title: <input className="form-control" name="title" type="text" />
        </div>
        <div className="mb-3">
          Chef: <input className="form-control" name="chef" type="text" />
        </div>
        <div className="mb-3">
          Image URL: <input className="form-control" name="image_url" type="text" />
        </div>
        <button className="btn btn-primary" type="submit">Create recipe</button>
      </form>
    </div>
  );
}
