const todoReducer = (state, action) => {
  switch (action.type) {
    case "TODO_NAME":
      return { ...state, name: action.payload };
    case "TODO_DESC":
      return { ...state, desc: action.payload };
    case "TODO_TIMER":
      return { ...state, timer: action.payload };
    case "INITIAL_TODO":
      return { ...state, name: "", desc: "", timer: 0 };
    default:
      return state;
  }
};

export { todoReducer };
