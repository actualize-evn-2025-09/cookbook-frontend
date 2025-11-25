import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import axios from "axios";
import { useState, useEffect } from 'react';

export function RecipesPage() {
  // where all the data comes from
  // prop - how we get data from one component to the next
  // we'll be using a 3rd party library called axios to make requests to our backend
  // react state 
  // useState - react hook
  const [recipes, setRecipes] = useState([]);
  // special state variable - recipes
  // function to update the state variable - setRecipes

  const handleIndex = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response.data);
      setRecipes(response.data);
    })
  }

  // handleIndex();
  useEffect(handleIndex, []);
  // useEffect - react hook
  // first argument - what we want it to do
  // second argument - when we want it to run - [] means on page load

  return (
    <div>
      <RecipesNew />
      <RecipesIndex recipesProp={recipes} />
    </div>
  );
}
