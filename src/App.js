import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Pomodoro } from "./pages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
      </Routes>
    </div>
  );
}

export default App;
