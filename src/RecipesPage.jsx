import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import axios from "axios";

export function RecipesPage() {
  // where all the data comes from
  // prop - how we get data from one component to the next
  // we'll be using a 3rd party library called axios to make requests to our backend
  // react state 
  let recipes = [];

  const handleIndex = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response.data);
      recipes = response.data;
    })
  }

  return (
    <div>
      <RecipesNew />
      <button onClick={handleIndex}>Load Recipes</button>
      <RecipesIndex recipesProp={recipes} />
    </div>
  );
}
