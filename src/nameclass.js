import React from "react";
class Nameclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <input onChange={(e) => this.setState({ name: e.target.value })} />
      </div>
    );
  }
}

export default Nameclass;
