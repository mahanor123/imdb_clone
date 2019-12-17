import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import { logaction } from "../../actions/logaction";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class Signin extends React.Component {
  state = {
    user: ""
  };
  handleName = (e) => {
    this.setState({ user: e.target.value });
  };
  render() {
    const { classes } = this.props;
    // console.log("Signin", this.props);
    // const { isLoggedIn } = this.props;
    // if (isLoggedIn) {
    //   console.log("REdirected", this.props.location.state.from);
    //   return <Redirect to={this.props.location.state.from} />;
    // }
    return (
      <div>
        <h2>Signin page</h2>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-email-input"
            label="Username"
            className={classes.textField}
            type="username"
            name="username"
            // autoComplete="username"
            margin="normal"
            variant="outlined"
            onChange={this.handleName}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
          <Button
            variant="outlined"
            onClick={() => {
              // console.log("signinprops", this.props.user);
              this.props.logaction(this.state.user);
              localStorage.setItem("user", this.state.user);
              this.setState({ user: "" });
            }}
          >
            Sign In
          </Button>
        </form>
      </div>
    );
  }
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired
};

const Signcomp = withStyles(styles)(Signin);

export default connect(
  null,
  { logaction }
)(Signcomp);
