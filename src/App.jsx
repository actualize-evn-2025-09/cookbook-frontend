// React Components - PascalCase
// JS - camelCase 

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#">All Recipes</a> | <a href="#">New Recipe</a>
    </header>
  )
}

function RecipesNew() {
  return (
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
  )
}

function RecipesIndex(props) {
  return (
    <div id="recipes-index">
      <h1>All {props.recipesProp.length} Recipes</h1>
      {props.recipesProp.map((recipe) => (
        <div key={recipe.id} className="recipes">
          <h2>{recipe.title}</h2>
          <img src={recipe.image_url} />
          <p>Chef: {recipe.chef}</p>
          <button>More Info</button>
        </div>
      ))}
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2025</p>
    </footer>
  )
}

function RecipesPage() {
  // where all the data comes from
  // prop - how we get data from one component to the next
  let recipes = [
    {
      id: 1,
      title: "Raw Eggs",
      chef: "Peter Jang",
      image_url: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg"
    },
    {
      id: 2,
      title: "Mud Pie",
      chef: "Jay Wengrow",
      image_url: "https://static.onecms.io/wp-content/uploads/sites/9/2017/12/mud-pie-XL-RECIPE2016.jpg"
    },
    {
      id: 3,
      title: "Butter Chicken",
      chef: "Leon",
      image_url: "https://nickskitchen.com/wp-content/uploads/2025/08/NK_Butter-Ckn_1-scaled.jpg"
    }
  ]

  return (
    <div>
      <RecipesNew />
      <RecipesIndex recipesProp={recipes} />
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <RecipesPage />
      <Footer />
    </div>
  )
}

export default App
