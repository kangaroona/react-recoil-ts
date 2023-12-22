import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import CharacterCounter from "./components/CharacterCounter";
import TodoList from "./components/TodoList";
import { RecoilRoot } from "recoil";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <RecoilRoot>
        <h2>CharacterCounter:</h2>
        <CharacterCounter />
        <h2>todolist:</h2>
        <TodoList />
      </RecoilRoot>
    </>
  );
}

export default App;
