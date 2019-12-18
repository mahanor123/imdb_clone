import React, { Component } from "react";
// import logo from "./componentes/Navbar/imdb.svg";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Search from "../search";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="Navbar">
        {/* <Search /> */}
        <Link to="/home">
          <Button style={{ color: "white",top:"10px" }}>Home</Button>
        </Link>
        <Link to="/Movies">
          <Button style={{ color: "white",top:"10px" }}>Movies</Button>
        </Link>
        <Link to="/WatchList">
          <Button style={{ color: "white",top:"10px"}}>
            WatchList
          </Button>
        </Link>
        {this.props.isLoggedin ? (
          <Button style={{ color: "white",top:"10px" }}>
            signOut
          </Button>
        ) : (
          <Link to="/signin">
            <Button style={{ color: "white",top:"10px"}}>
              Signin
            </Button>
          </Link>
        )}
      </div>
    );
  }
}

export default Navbar;
