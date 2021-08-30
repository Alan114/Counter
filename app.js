const { useState } = React;

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="counter">
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById("root"));
