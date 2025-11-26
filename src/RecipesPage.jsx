import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import axios from "axios";
import { useState, useEffect } from 'react';
import { Modal } from "./Modal";
import { RecipesShow } from "./RecipesShow";

export function RecipesPage() {
  // where all the data comes from
  // prop - how we get data from one component to the next
  // we'll be using a 3rd party library called axios to make requests to our backend
  // react state 
  // useState - react hook
  const [recipes, setRecipes] = useState([]);
  // special state variable - recipes
  // function to update the state variable - setRecipes
  const [isRecipesShowVisible, setIsRecipesShowVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({});

  const handleIndex = () => {
    axios.get("/recipes.json").then((response) => {
      setRecipes(response.data);
    })
  }

  const handleShow = (recipe) => {
    setIsRecipesShowVisible(true);
    setCurrentRecipe(recipe);
  }

  const handleCreate = (params) => {
    axios.post("/recipes.json", params).then((response) => {
      // let copiedRecipes = Array.from(recipes);
      // copiedRecipes.push(response.data);
      // setRecipes(copiedRecipes);

      // spread operator
      setRecipes([...recipes, response.data]);
    })
  }

  const handleUpdate = (recipe, params) => {
    axios.patch(`/recipes/${recipe.id}.json`, params)
      .then((response) => {
      // let updatedRecipes = [];
      // let index = 0;
      // while (index < recipes.length) {
      //   if (recipes[index].id === response.data.id) {
      //     updatedRecipes.push(response.data)
      //   } else {
      //     updatedRecipes.push(recipes[index])
      //   }
      //   index += 1
      // }
      // setRecipes(updatedRecipes);

      setRecipes(recipes.map(r => r.id === response.data.id ? response.data : r))
      setIsRecipesShowVisible(false);
    })
  }

  const handleDestroy = (recipe) => {
    axios.delete(`/recipes/${recipe.id}.json`)
      .then((response) => {
        setRecipes(recipes.filter(r => r.id !== recipe.id));
        setIsRecipesShowVisible(false);
      })
  }

  // handleIndex();
  useEffect(handleIndex, []);
  // useEffect - react hook
  // first argument - what we want it to do
  // second argument - when we want it to run - [] means on page load

  return (
    <div>
      <RecipesNew onCreate={handleCreate} />
      <RecipesIndex recipesProp={recipes} onShow={handleShow} />
      <Modal show={isRecipesShowVisible} onClose={() => setIsRecipesShowVisible(false)}>
        <RecipesShow recipe={currentRecipe} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </div>
  );
}
