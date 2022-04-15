import React from "react";
import { useToggle, useTask, useTodo } from "../contexts";
import { useButtonText } from "../contexts/submitButtonContext";

function TodoList() {
  const { setActive } = useToggle();
  const { taskState, taskDispatch } = useTask();
  const { todoDispatch } = useTodo();
  const { buttonTextDispatch } = useButtonText();
  function addTaskHandler() {
    setActive((previous) => !previous);
  }
  function editTaskHandler(id) {
    setActive((previous) => !previous);
    const taskToEdit = taskState.taskList.find((item) => item.id === id);
    todoDispatch({ type: "TODO_NAME", payload: taskToEdit.name });
    todoDispatch({ type: "TODO_DESC", payload: taskToEdit.desc });
    todoDispatch({ type: "TODO_TIMER", payload: taskToEdit.timer });
  }

  function deleteTaskHandler(id) {
    return taskState.taskList.filter((item) => item.id !== id);
  }

  return (
    <div>
      <div className="todo-section">
        <div className="todo-sec-btn">
          <h2 className="main-h2">To - Do List</h2>
          <button
            className="btn floating-btn todoAdd"
            onClick={() => {
              buttonTextDispatch({ type: "ADD_MODE" });
              addTaskHandler();
            }}
          >
            +
          </button>
        </div>
        <ul className="todo-list">
          {taskState.taskList.map((item) => {
            return (
              <li className="h3-text todo-list-item" key={item.id}>
                <p className="h3-text"> {item.name}</p>
                <div className="li-icons">
                  <i
                    className="fas fa-trash-alt"
                    onClick={() =>
                      taskDispatch({
                        type: "DELETE_TASK",
                        payload: deleteTaskHandler(item.id),
                      })
                    }
                  ></i>
                  <i
                    className="fas fa-edit"
                    onClick={() => {
                      buttonTextDispatch({
                        type: "EDIT_MODE",
                        payload: item.id,
                      });
                      editTaskHandler(item.id);
                    }}
                  ></i>
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
