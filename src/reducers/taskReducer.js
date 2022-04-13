import { v4 } from "uuid";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        taskList: [...state.taskList, { ...action.payload, id: v4() }],
      };
    case "EDIT_TASK":
      return {
        ...state,
        taskList: action.payload,
      };
    default:
      return state;
  }
};

export { taskReducer };
