import React from "react";
import { TodoList } from "../../components";

function Home() {
  return (
    <div>
      <h1 className="main-h1 main-text-color">Welcome back, Anshika!</h1>
      <p className="main-p main-text-color">
        You have 4 tasks for today. All the best!{" "}
      </p>
      <TodoList />
    </div>
  );
}

export default Home;
