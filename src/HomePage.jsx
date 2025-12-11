import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h1>Welcome to the Cookbook!</h1>
      <p>Browse our collection of delicious recipes.</p>
      <Link to="/recipes">View All Recipes</Link>
    </div>
  );
}
