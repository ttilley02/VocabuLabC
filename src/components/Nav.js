import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <>
        <nav className="navigation">
          {this.props.login}
          {this.props.signup}
          {this.props.home}
        </nav>
      </>
    );
  }
  // Set default props
  getDefaultProps() {
    return {
      top: "MenuStuff",
      signup: "MenuStuff",
      home: "MenuStuff"
    };
  }
}
