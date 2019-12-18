import React from "react";
import { FormGroup, Button, Input } from "reactstrap";
import { Redirect } from "react-router-dom";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: " ",
      password: ""
    };
  }

  handleChange = e => {
    if (e.target.name === "email") {
      this.setState({
        email: e.target.value
      });
    } else if (e.target.name === "password") {
      this.setState({
        password: e.target.value
      });
    }
  };

  render() {
    const { email, password } = this.state;
    if (this.props.isLoggedIn) {
      return <Redirect to="/home" />;
    } else {
      return (
        <div className="body">
          <FormGroup>
            <Input
              name="email"
              type="email"
              value={this.state.email}
              // id="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            onClick={() => {
              this.props.handleLogin(email, password);

              console.log("isLogged", this.props.isLoggedIn);
            }}
          >
            Login
          </Button>
        </div>
      );
    }
  }
}

export default Signin;
