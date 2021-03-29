// import { render } from "@testing-library/react";
import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  let [counter, setCounter] = useState(0);

  let state = useState(0)
  console.log(state);
  
  let [toggle, setToggle] = useState(false);

  
  
  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    if (counter === 0) return;
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <h3>Counter App</h3>
      <Counter counter={counter} increment={increment} decrement={decrement} />
    </div>
  );
}

export default App;
