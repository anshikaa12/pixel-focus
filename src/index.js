import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { TaskProvider, ToggleProvider, TodoProvider } from "./contexts";
import { ButtonTextProvider } from "./contexts/submitButtonContext";

ReactDOM.render(
  <React.StrictMode>
    <ButtonTextProvider>
      <TodoProvider>
        <TaskProvider>
          <ToggleProvider>
            <Router>
              <App />
            </Router>
          </ToggleProvider>
        </TaskProvider>
      </TodoProvider>
    </ButtonTextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
