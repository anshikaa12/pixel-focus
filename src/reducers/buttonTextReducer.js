const buttonTextReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MODE":
      return { ...state, id: null, mode: "ADD" };
    case "EDIT_MODE":
      return { ...state, id: action.payload, mode: "EDIT" };
    default:
      return state;
  }
};

export { buttonTextReducer };
