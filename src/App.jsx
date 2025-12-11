import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Footer } from "./Footer"
import { Header } from "./Header"
import { RecipesPage } from "./RecipesPage"
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { RecipesIndexPage } from "./RecipesIndexPage";
import { RecipesNewPage } from "./RecipesNewPage";
import { RecipesShowPage } from "./RecipesShowPage";

axios.defaults.baseURL = "http://localhost:3000";
// if it's in development mode, use localhost:3000, else use the deployed backend
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/signup",
        element: <SignupPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/recipes",
        element: <RecipesIndexPage />
      },
      {
        path: "/recipes/new",
        element: <RecipesNewPage />
      },
      {
        path: "/recipes/:id",
        element: <RecipesShowPage />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
