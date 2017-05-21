import React, { Component } from "react";
import Row from "./Row";

export default class App extends React.Component {
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
              <td>Enter your JSON style here: </td>
              <td>Here is what that would look like:</td>
            </tr>
           <Row number="0"/>
            <tr>
              <td colSpan={2} className="last"> <button>Add Row</button> </td>
              
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}