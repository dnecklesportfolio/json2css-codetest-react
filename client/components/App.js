import React, { Component } from "react";
import Row from "./Row";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfUsers: 7 ,
       numberOfRows: 7 
    }
    this.handleClick  =  this.handleClick.bind(this)
    this.renderRow    =  this.renderRow.bind(this)
  }

  handleClick () {
    console.log("test"+this.state.numberOfRows)
    this.setState({numberOfRows: this.state.numberOfRows+1})
  }

  renderRow () {
    for (let i=0; i<this.state.numberOfRows; i++) {
      return <Row number={i}/>
    }
  }

  render() {
    return (
      <div>
        <table className="table-header">
          <tbody>
            <tr>
              <td colSpan={2}>Name: <input type="text"/> <button>Load</button>
              <button>Save</button></td>
            </tr>
            <tr>
              <td>Enter your JSON style here: {this.state.numberOfRows} </td>
              <td>Here is what that would look like:</td>
            </tr>
            {this.renderRow() }

            <tr>
              <td colSpan={2} className="last"> <button onClick={this.handleClick}>Add Row</button> </td>
              
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}