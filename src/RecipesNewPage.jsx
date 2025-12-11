import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RecipesNew } from "./RecipesNew";

export function RecipesNewPage() {
  const navigate = useNavigate();

  const handleCreate = (params) => {
    axios.post("/recipes.json", params).then((response) => {
      console.log(response.data);
      navigate("/recipes");
    });
  };

  return (
    <div>
      <h1>New Recipe</h1>
      <RecipesNew onCreate={handleCreate} />
    </div>
  );
}
