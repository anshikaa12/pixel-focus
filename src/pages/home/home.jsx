import { TodoList, EditModal } from "../../components";
import { useToggle } from "../../contexts/editContext";

function Home() {
  const { active } = useToggle();
  return (
    <div>
      <h1 className="main-h1 main-text-color">Welcome back, Anshika!</h1>
      <p className="main-p main-text-color">
        You have 4 tasks for today. All the best!{" "}
      </p>
      <TodoList />
      {active && <EditModal />}
    </div>
  );
}

export default Home;
