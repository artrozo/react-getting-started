import React from "react";
class Name extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Name;
