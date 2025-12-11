import { Link } from "react-router-dom"
import { LogoutLink } from "./LogoutLink"

export function Header() {
  const email = localStorage.getItem("email")

  return (
    <header>
      <nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">CookBook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/recipes">All Recipes</Link>
              <Link className="nav-link" to="/recipes/new">New Recipe</Link>
              {/* ternary operator */}
              {email ? (
                <>
                  <div>Logged in as {email}</div>
                  <LogoutLink />
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/signup">Signup</Link>
                  <Link className="nav-link" to="/login">Login</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
