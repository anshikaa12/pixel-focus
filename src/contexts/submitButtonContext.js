import { createContext, useContext, useReducer } from "react";
import { buttonTextReducer } from "../reducers/buttonTextReducer";
const buttonText = createContext();
const useButtonText = () => useContext(buttonText);
const ButtonTextProvider = ({ children }) => {
  const [buttonTextState, buttonTextDispatch] = useReducer(buttonTextReducer, {
    mode: null,
    currentId: null,
  });
  return (
    <buttonText.Provider value={{ buttonTextState, buttonTextDispatch }}>
      {children}
    </buttonText.Provider>
  );
};

export { useButtonText, ButtonTextProvider };
