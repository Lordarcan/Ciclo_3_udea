import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppProductos from "./App_productos";
import AppVentas from "./App_registroVentas";
import AppBdVentas from "./App_BdVentas";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Login";
import { Profile } from "./Profile";
import { LogoutButton } from "./Logout";

function Productos() {
  return AppProductos;
}

function Ventas() {
  return AppVentas;
}

function BdVentas() {
  return AppBdVentas;
}

function AppHome() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="AppHome">
      <header className="AppHome-header">
        {isAuthenticated ? (
          <>
            <Router>
              <div className={"site-content"}>
                <nav class="light-green darken-3">
                  <ul>
                    <li>
                      <Link to="/src/app/App_productos">Productos</Link>
                    </li>
                    <li>
                      <Link to="/src/app/App_registroVentas">
                        Realizar Venta
                      </Link>
                    </li>
                    <li>
                      <Link to="/src/app/App_BdVentas">Historico Ventas</Link>
                    </li>
                  </ul>
                </nav>
                <Route
                  path="/src/app/App_productos"
                  exact
                  component={AppProductos}
                />
                <Route
                  path="/src/app/App_registroVentas"
                  exact
                  component={AppVentas}
                />
                <Route
                  path="/src/app/App_BdVentas"
                  exact
                  component={AppBdVentas}
                />
              </div>
            </Router>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}
export default AppHome;
