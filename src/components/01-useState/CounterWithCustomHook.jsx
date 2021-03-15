import { useCounter } from "../../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <div className="container mt-5">
      <h1>Counter with custom hook: {state}</h1>
      <hr />

      <button onClick={() => increment(2)} className="btn">
        +1
      </button>
      <button onClick={reset} className="btn">
        reset
      </button>
      <button onClick={() => decrement(2)} className="btn">
        -1
      </button>
    </div>
  );
};

export default CounterWithCustomHook;
