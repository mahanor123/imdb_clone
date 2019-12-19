import React from "react";
import { Route, Redirect } from "react-router-dom";
export default function ProtectSignin({
  Component,
  user,
  handleSubmit,
  ...rest
}) {
  console.log(user);
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log("From", props.location);
        const from = props.location.state
          ? props.location.state.from
          : undefined;
        return user || localStorage.getItem("user") ? (
          <Redirect to={from ? from : "/"} />
        ) : (
          <Component {...props} handleSubmit={handleSubmit} user={user} />
        );
      }}
    />
  );
}
