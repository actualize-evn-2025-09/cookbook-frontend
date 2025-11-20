// React Components - PascalCase
// JS - camelCase 
function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#">All Recipes</a> | <a href="#">New Recipe</a>
      </header>

      <div id="recipes-new">
        <h1>New Recipe</h1>
        <form>
          <div>
            Title: <input type="text" />
          </div>
          <div>
            Chef: <input type="text" />
          </div>
          <button type="submit">Create recipe</button>
        </form>
      </div>

      <div id="recipes-index">
        <h1>All Recipes</h1>
        <div className="recipes">
          <h2>Raw Eggs</h2>
          <img src="https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg" />
          <p>Chef: Peter Jang</p>
          <button>More Info</button>
        </div>
        <div className="recipes">
          <h2>Mud Pie</h2>
          <img src="https://static.onecms.io/wp-content/uploads/sites/9/2017/12/mud-pie-XL-RECIPE2016.jpg" />
          <p>Chef: Jay Wengrow</p>
          <button>More Info</button>
        </div>
      </div>

      <footer>
        <p>Copyright 2025</p>
      </footer>
    </div>
  )
}

export default App
