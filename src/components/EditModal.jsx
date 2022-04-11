import React from "react";
import { useToggle } from "../contexts/editContext";

function EditModal() {
  const { active, setActive } = useToggle();
  function submitTaskHandler() {
    setActive(!active);
  }
  return (
    <div className="edit-modal">
      <h4 className="main-h4">Task to do!</h4>
      <form>
        <input
          type="text"
          className="input-box input-md no-border-input"
          placeholder="Add title"
        />
        <textarea
          className="input-text-area no-border-input"
          placeholder="Add Description"
        />
        <input
          type="text"
          className="input-box input-md no-border-input"
          placeholder="Add timer limit"
        />
        <button className="mid-btn btn-primary" onClick={submitTaskHandler}>
          Update
        </button>
      </form>
    </div>
  );
}

export default EditModal;
