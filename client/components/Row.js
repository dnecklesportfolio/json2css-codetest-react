import React, { Component } from "react";
export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "",
    styleObj:{} }

    this.handleChange = this.handleChange.bind(this);
   
  }
componentDidMount() {
this.state = { value: this.props.style ? this.handleChange() :"" ,
    styleObj:{} };
}

  /* {"backgroundColor":"yellow"}*/
  handleChange(event) {
     
    this.setState(
      {
        value: event ? event.target.value : this.props.style 
      },
      () => {
       //callback function needed here when state is set
        const myObject = JSON.parse(this.state.value);
        this.setState({styleObj: myObject});
      }
    );
  }


  render() {
    return (
      <tr>
        <td>
          <input
            type="textfield"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </td>
        <td style={this.state.styleObj}>{this.state.value} This is row #{this.props.index} </td>

      </tr>
    );
  }
}
