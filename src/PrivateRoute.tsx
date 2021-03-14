import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }: any) {
  const { authenticated }: any = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return authenticated ? (
          <Component {...props} />
        ) : (
          // <Redirect to="/login" />
          <Redirect
            to={{ pathname: "/login", state: { prevPath: rest.path } }}
          />
        );
      }}
    ></Route>
  );
}
