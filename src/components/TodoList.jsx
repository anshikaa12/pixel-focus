import React from "react";
import { useToggle } from "../contexts/editContext";

function TodoList() {
  const { active, setActive } = useToggle();
  function editTaskHandler() {
    setActive(!active);
  }
  return (
    <div>
      <div className="todo-section">
        <div className="todo-sec-btn">
          <h2 className="main-h2">To - Do List</h2>
          <button className="btn floating-btn todoAdd">+</button>
        </div>
        <ul className="todo-list">
          <li className="h3-text todo-list-item">
            <p className="h3-text"> Grocery</p>
            <div className="li-icons">
              <i className="fas fa-trash-alt"></i>
              <i className="fas fa-edit" onClick={editTaskHandler}></i>
            </div>
          </li>

          <li className="h3-text todo-list-item">
            <p className="h3-text"> Grocery</p>
            <div className="li-icons">
              <i className="fas fa-trash-alt"></i>
              <i className="fas fa-edit" onClick={editTaskHandler}></i>
            </div>
          </li>

          <li className="h3-text todo-list-item">
            <p className="h3-text"> Grocery</p>
            <div className="li-icons">
              <i className="fas fa-trash-alt"></i>
              <i className="fas fa-edit" onClick={editTaskHandler}></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
