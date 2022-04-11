import { createContext, useContext, useState } from "react";

const toggleEdit = createContext();
const useToggle = () => useContext(toggleEdit);
const ToggleProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <toggleEdit.Provider value={{ active, setActive }}>
      {children}
    </toggleEdit.Provider>
  );
};
export { useToggle, ToggleProvider };
