import React, { Component } from "react";
import Button from "./Button";

export default class Auth extends Component {
  componentDidMount() {}

  render() {
    return <Button onClick={this.props.doLogin}>Login</Button>;
  }
}
