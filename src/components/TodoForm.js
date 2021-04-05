import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  handleChanges = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChanges} type="text" name="item" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
