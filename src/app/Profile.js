import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="container">
        <div className="row">
          <div className="col s9">
            <div className="card">
              <div className="card-content">
                <img src={user.picture} alt={user.name} />
                <h2>Bienvenido {user.name}</h2>
                <h4>Email: {user.email}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
