import { Component } from "react";

class ButtonComponent extends Component {
  render() {
    return <button style={{ width: "10rem", height: "3rem", fontSize: "2rem", marginTop: "1rem" }}>{this.props.label}</button>;
  }
}

export default ButtonComponent;
