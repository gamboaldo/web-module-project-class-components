import React from "react";
import Form from "./components/TodoForm";
import TodoList from "./components/TodoList";

const list = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: list,
    };
  }

  toggleItem = (id) => {
    // const newList = this.state.list.map((item) => {
    //   item.id = id ? { ...item, completed: !item.completed } : item;
    // });
    const newList = this.state.list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });

    this.setState({
      list: newList,
    });
  };

  addItem = (itemname) => {
    this.setState({
      list: [
        ...this.state.list,
        {
          task: itemname,
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };

  render() {
    console.log(this.state.list);
    return (
      <div className="App">
        <div className="header">
          <h4>Welcome to your Todo App!!!</h4>
          <Form addItem={this.addItem} />
        </div>
        <TodoList toggleItem={this.toggleItem} list={this.state.list} />
      </div>
    );
  }
}

export default App;
