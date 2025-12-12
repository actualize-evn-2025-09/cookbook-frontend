import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RecipesNew } from "./RecipesNew";

export function RecipesNewPage() {
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/tags.json").then((response) => {
      setTags(response.data);
    });
  }, []);

  const handleCreate = (params) => {
    axios.post("/recipes.json", params).then((response) => {
      console.log(response.data);
      navigate("/recipes");
    });
  };

  return (
    <div>
      <RecipesNew onCreate={handleCreate} tags={tags} />
    </div>
  );
}
