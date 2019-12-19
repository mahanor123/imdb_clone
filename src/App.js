import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import WatchList from "./components/WatchList/WatchList";
import "./App.css";
import Signin from "./components/Signin/Signin";
import Protect from "./components/Protect";
import ProtectSignin from "./components/ProtectSignin";
import { connect } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Movies from "./components/Movies/Movies";

class App extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="App">
        {/* <React.Fragment> */}
          <CssBaseline />
          <Container maxWidth="md">
            <Typography
              component="div"
              style={{
                backgroundColor: "gray",
                minHeight: "100vh",
                height: "auto",
                paddingBottom: "30px"
              }}
            >
              <BrowserRouter>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/movies" component={Movies} />
                <Protect path="/watchlist" Component={WatchList} user={user} />
                <ProtectSignin
                  path="/signin"
                  Component={Signin}
                  user={user}
                  handleSubmit={this.handleSubmit}
                />
              </BrowserRouter>
            </Typography>
          </Container>
        {/* </React.Fragment> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("State", state);
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(App);
