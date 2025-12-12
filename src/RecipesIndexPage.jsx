import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RecipesIndex } from "./RecipesIndex";

export function RecipesIndexPage() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  const [allTags, setAllTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  const handleIndex = (filterTag = "") => {
    axios.get(`/recipes.json?tag=${filterTag}`).then((response) => {
      setRecipes(response.data);
    });
  };

  const handleIndexTags = () => {
    axios.get("/tags.json").then((response) => {
      setAllTags(response.data)
    })
  }

  useEffect(() => {
    handleIndex();
    handleIndexTags();
  }, [])

  const handleShow = (recipe) => {
    navigate(`/recipes/${recipe.id}`);
  };

  const handleFilterChange = (event) => {
    const tag = event.target.value;
    setSelectedTag(tag);
    handleIndex(tag);
  }

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="tagFilter" className="form-label">Filter by Tag:</label>
        <select
          id="tagFilter"
          className="form-select"
          style={{ maxWidth: "200px" }}
          value={selectedTag}
          onChange={handleFilterChange}
        >
          <option value="">All Recipes</option>
          {allTags.map((tag) => (
            <option key={tag.id} value={tag.name}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>
      
      <RecipesIndex recipesProp={recipes} onShow={handleShow} />
    </div>
  );
}
