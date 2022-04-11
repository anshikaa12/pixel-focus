import React from "react";

function TodoList() {
  return (
    <div>
      <div className="todo-section">
        <div className="todo-sec-btn">
          <h2 className="main-h2">To - Do List</h2>
          <button class="btn floating-btn todoAdd">+</button>
        </div>
        <ul className="todo-list">
          <li className="h3-text todo-list-item">
            <p className="h3-text"> Grocery</p>
            <div className="li-icons">
              <i class="fas fa-trash-alt"></i>
              <i class="fas fa-edit"></i>
            </div>
          </li>

          <li className="h3-text todo-list-item">
            <p className="h3-text"> Grocery</p>
            <div className="li-icons">
              <i class="fas fa-trash-alt"></i>
              <i class="fas fa-edit"></i>
            </div>
          </li>

          <li className="h3-text todo-list-item">
            <p className="h3-text"> Grocery</p>
            <div className="li-icons">
              <i class="fas fa-trash-alt"></i>
              <i class="fas fa-edit"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
