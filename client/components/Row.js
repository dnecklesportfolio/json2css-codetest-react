import React, { Component } from "react";
export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.applyStyle = this.applyStyle.bind(this);
  }

  applyStyle(element, style) {
    console.log("test", element, style);
    Object.keys(style).forEach(function(key) {
      element.style[key] = style[key];
      console.log("test", element.style[key]);
    });
  }
  /* {"backgroundColor":"yellow"}*/
  handleChange(event) {
    this.setState(
      {
        value: event.target.value
      },
      () => {
        const myObject = JSON.parse(this.state.value);
        this.applyStyle(document.getElementById("target"), myObject);
      }
    );
  }

  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </td>
        <td id="target">{this.state.value} This is row {this.props.list} </td>

      </tr>
    );
  }
}
