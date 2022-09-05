import { Component } from "react";

class InputComponent extends Component {
  render() {
    return <input placeholder={this.props.placeholder} />;
  };
};

export default InputComponent;
