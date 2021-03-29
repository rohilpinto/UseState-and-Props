

import "../components/Counter.css";


function Counter({increment,decrement, counter}) {
  return (
    <div className="Counter">
      <h3>Counter: {counter}</h3>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Substract</button>
    </div>
  );
}

export default Counter;
