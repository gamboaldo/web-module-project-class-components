import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={""}>
          <input type="text" name="item" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
