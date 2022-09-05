import { Component } from "react";

class ButtonComponent extends Component {
  render() {
    return <button>{this.props.label}</button>;
  }
}

export default ButtonComponent;
