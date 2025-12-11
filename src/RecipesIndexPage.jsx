import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RecipesIndex } from "./RecipesIndex";

export function RecipesIndexPage() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  const handleIndex = () => {
    axios.get("/recipes.json").then((response) => {
      setRecipes(response.data);
    });
  };

  useEffect(handleIndex, []);

  const handleShow = (recipe) => {
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <div>
      <RecipesIndex recipesProp={recipes} onShow={handleShow} />
    </div>
  );
}
