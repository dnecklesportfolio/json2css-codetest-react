import React, { Component } from "react";
import Row from "./Row";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      commandArr: [""],
      sessionArr: [
        {
          username: "dwayne",
          commandArr: [
            '{"backgroundColor":"yellow"}',
            '{"backgroundColor":"red"}',
            '{"backgroundColor":"pink"}'
          ]
        },
        {
          username: "marcus",
          commandArr: [
            '{"backgroundColor":"red"}',
            '{"backgroundColor":"black"}',
            '{"backgroundColor":"green"}'
          ]
        }
      ]
    };

    this.addNewRow = this.addNewRow.bind(this);
    this.handleNameInputChange = this.handleNameInputChange.bind(this);
    this.generateID = this.generateID.bind(this);
    this.saveUserSession = this.saveUserSession.bind(this);
    this.loadUserSession = this.loadUserSession.bind(this);
  }

  addNewRow() {
    //var nextArr = this.state.arrRows.concat['8']
    var nextArr = [...this.state.commandArr, ""];
    this.setState({
      username: "",
      commandArr: nextArr
    });
  }

  handleNameInputChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }
  generateID() {
    return Math.floor(Math.random() * 1000000);
  }

  saveUserSession(event) {
    event.preventDefault();
    const nextArr = [...this.state.commandArr, ""];

    this.setState({
      username: event.target.value,
      commandArr: nextArr
    });
  }

  loadUserSession(event) {
    event.preventDefault();
    const target = this.state.username;

    const sessionToLoad = this.state.sessionArr.find(function(session) {
      return session.username === target;
    });

    this.setState(
      {
        username: target,
        commandArr: sessionToLoad.commandArr
      }
    );
  }
  render() {
    return (
      <div>
        <table className="table-header">
          <tbody>
            <tr>
              <td colSpan={2}>
                Name:
                <form>
                  <input
                    value={this.state.username}
                    onChange={this.handleNameInputChange}
                    type="text"
                  />

                  <button onClick={this.loadUserSession}>Load</button>
                  <button onClick={this.saveUserSession}>Save</button>
                </form>
              </td>
            </tr>
            <tr>
              <td>Enter your JSON style here: </td>
              <td>Here is what that would look like:</td>
            </tr>
            {this.state.commandArr.map((value, index) => {
              return (
                <Row key={this.generateID()} style={value} index={index} />
              );
            })}

            <tr>
              <td colSpan={2} className="last">
                <button onClick={this.addNewRow}>Add Row</button>
              </td>

            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}
