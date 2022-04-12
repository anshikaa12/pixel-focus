import React from "react";
import { useToggle, useTask } from "../contexts";

function TodoList() {
  const { active, setActive } = useToggle();
  function editTaskHandler() {
    setActive(!active);
  }
  const { taskState } = useTask();
  return (
    <div>
      <div className="todo-section">
        <div className="todo-sec-btn">
          <h2 className="main-h2">To - Do List</h2>
          <button
            className="btn floating-btn todoAdd"
            onClick={editTaskHandler}
          >
            +
          </button>
        </div>
        <ul className="todo-list">
          {taskState.taskList.map((item) => {
            return (
              <li className="h3-text todo-list-item" key={item.name}>
                <p className="h3-text"> {item.name}</p>
                <div className="li-icons">
                  <i className="fas fa-trash-alt"></i>
                  <i className="fas fa-edit" onClick={editTaskHandler}></i>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
