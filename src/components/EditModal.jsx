import React from "react";
import { useTask, useTodo, useToggle } from "../contexts";
import { useButtonText } from "../contexts/submitButtonContext";

function EditModal() {
  const { setActive } = useToggle();
  const { todoState, todoDispatch } = useTodo();
  const { taskState, taskDispatch } = useTask();
  const { buttonTextState } = useButtonText();
  function EditTaskList(id) {
    let updatedList = taskState.taskList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name: todoState.name,
          desc: todoState.desc,
          timer: todoState.timer,
        };
      }
      return item;
    });
    return updatedList;
  }

  return (
    <div className="edit-modal">
      <h4 className="main-h4">Task to do!</h4>
      <form>
        <input
          type="text"
          className="input-box input-md no-border-input"
          placeholder="Add title"
          value={todoState.name}
          onChange={(e) => {
            todoDispatch({ type: "TODO_NAME", payload: e.target.value });
          }}
        />
        <textarea
          className="input-text-area no-border-input"
          placeholder="Add Description"
          value={todoState.desc}
          onChange={(e) =>
            todoDispatch({ type: "TODO_DESC", payload: e.target.value })
          }
        />
        <input
          type="text"
          className="input-box input-md no-border-input"
          placeholder="Add timer limit in seconds"
          value={todoState.timer}
          onChange={(e) =>
            todoDispatch({ type: "TODO_TIMER", payload: e.target.value })
          }
        />
      </form>
      <button
        className="mid-btn btn-primary"
        onClick={
          buttonTextState.mode === "ADD"
            ? () => {
                todoDispatch({ type: "INITIAL_TODO" });
                setActive((previous) => !previous);
                taskDispatch({ type: "ADD_TASK", payload: todoState });
              }
            : () => {
                setActive((previous) => !previous);
                let updatedList = EditTaskList(buttonTextState.id);
                taskDispatch({ type: "EDIT_TASK", payload: updatedList });
                todoDispatch({ type: "INITIAL_TODO" });
              }
        }
      >
        {buttonTextState.mode}
      </button>
    </div>
  );
}

export default EditModal;
