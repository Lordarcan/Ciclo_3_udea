import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s9">
            <div className="card">
              <div className="card-content">
                <h3>Proyecto ciclo3 UdeA grupo 22</h3>
                <button
                  class="waves-effect waves-light btn"
                  onClick={() => loginWithPopup()}
                >
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
