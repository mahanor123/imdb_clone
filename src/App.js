import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componentes/Navbar/Navbar.js";
import watchList from "./componentes/Navbar/WatchList/watchList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import movies from "./componentes/Movies/Movies.js";
import Signin from "./componentes/signin/signin";
import Home from "./componentes/Home/Home.js";
import { Redirect } from "react-router-dom";
function ProtectedRoute({ Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/Signin",
              state: { from: props.location.pathname }
            }}
          />
        );
      }}
    />
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  handleLogin = (email, password) => {
    if (email === "pooja@gmail.com" && password === "12345") {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  };
  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="App">
        <Router>
          {/* <Navbar isLoggedIn={isLoggedIn} /> */}
          <Navbar />
          <Switch>
            <ProtectedRoute path="/home" component={Home} />
            <Route
              path="/signin"
              render={props => {
                return (
                  <Signin
                    {...props}
                    handleLogin={this.handleLogin}
                    isLoggedIn={isLoggedIn}
                  />
                );
              }}
            />
            <ProtectedRoute
              path="/watchlist"
              Component={watchList}
              isLoggedIn={isLoggedIn}
            />
            <ProtectedRoute
              path="/movies"
              Component={movies}
              isLoggedIn={isLoggedIn}
            />
            <Redirect to="/home" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
