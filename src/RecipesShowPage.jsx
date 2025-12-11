import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RecipesShow } from "./RecipesShow";

export function RecipesShowPage() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/recipes/${id}.json`).then((response) => {
      setRecipe(response.data);
    });
  }, [id]);

  const handleUpdate = (recipe, params) => {
    axios.patch(`/recipes/${id}.json`, params).then((response) => {
      setRecipe(response.data);
      navigate("/recipes");
    });
  };

  const handleDestroy = () => {
    axios.delete(`/recipes/${id}.json`).then(() => {
      navigate("/recipes");
    });
  };

  return (
    <div>
      <RecipesShow recipe={recipe} onUpdate={handleUpdate} onDestroy={handleDestroy} />
    </div>
  );
}
