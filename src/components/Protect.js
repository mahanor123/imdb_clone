import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function Protect({ Component, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log("Props", props);
        return user || localStorage.getItem("user") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location.pathname }
            }}
          />
        );
      }}
    />
  );
}
