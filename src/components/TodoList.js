// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const handleClick = () => {
    props.clearCompleted();
  };
  return (
    <div>
      <h1>todolist bitch</h1>
      {props.list.map((item) => (
        <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
      ))}
      <button onClick={handleClick}>CLEAR</button>
    </div>
  );
};

export default TodoList;
