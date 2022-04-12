import React from "react";
import { useTask, useTodo, useToggle } from "../contexts";

function EditModal() {
  const { setActive } = useToggle();
  const { todoState, todoDispatch } = useTodo();
  const { taskDispatch } = useTask();
  function submitTaskHandler() {
    setActive((previous) => !previous);
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
          onChange={(e) =>
            todoDispatch({ type: "TODO_NAME", payload: e.target.value })
          }
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
          placeholder="Add timer limit"
          value={todoState.timer}
          onChange={(e) =>
            todoDispatch({ type: "TODO_TIMER", payload: e.target.value })
          }
        />
      </form>
      <button
        className="mid-btn btn-primary"
        onClick={() => {
          taskDispatch({ type: "ADD_TASK", payload: todoState });
          todoDispatch({ type: "INITIAL_TODO" });
          submitTaskHandler();
        }}
      >
        Update
      </button>
    </div>
  );
}

export default EditModal;
