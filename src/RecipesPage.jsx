import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";

export function RecipesPage() {
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
  ];

  return (
    <div>
      <RecipesNew />
      <RecipesIndex recipesProp={recipes} />
    </div>
  );
}
