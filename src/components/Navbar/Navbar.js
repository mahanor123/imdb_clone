import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logaction } from "../../actions/logaction";
import Button from "../uielements/button.style";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Navbar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="navbar">
        <div className={classes.root}>
          {/* <AppBar position="static"> */}
            {/* <Toolbar> */}
              <Link to="/">
                <Button
                  color="inherit"
                  className={classes.menuButton}
                  textcolor="white"
                >
                  Home
                </Button>
              </Link>
              <Link to="/movies">
                <Button
                  color="inherit"
                  className={classes.grow}
                  textcolor="white"
                >
                  Movies
                </Button>
              </Link>
              <Link to="/watchlist">
                <Button
                  color="inherit"
                  className={classes.grow}
                  textcolor="white"
                >
                  Watch List
                </Button>
              </Link>
              {!this.props.user && !localStorage.getItem("user") ? (
                <Link to="signin">
                  <Button
                    color="secondary"
                    variant="contained"
                    textcolor="white"
                  >
                    Sign in
                  </Button>
                </Link>
              ) : (
                <Link
                  to="#"
                  onClick={(e) => {
                    this.props.logaction("");
                    localStorage.removeItem("user");
                  }}
                >
                  <Button color="inherit" textcolor="white">
                    Sign Out
                  </Button>
                </Link>
              )}
            {/* </Toolbar> */}
          {/* </AppBar> */}
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

const Comp = withStyles(styles)(Navbar);

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logaction: () => {
//       dispatch(logaction)
//     }
//   };
// };
export default connect(
  mapStateToProps,
  // mapDispatchToProps
  { logaction }
)(Comp);
