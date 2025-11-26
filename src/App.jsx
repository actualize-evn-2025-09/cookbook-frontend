import { Footer } from "./Footer"
import { Header } from "./Header"
import { RecipesPage } from "./RecipesPage"
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
// if it's in development mode, use localhost:3000, else use the deployed backend
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <RecipesPage />
      <Footer />
    </div>
  )
}

export default App
