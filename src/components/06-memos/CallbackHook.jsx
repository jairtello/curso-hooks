import { useCallback, useEffect, useState } from "react";
import ShowIncrement from "./Showincrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  useEffect(() => {
    // ???
  }, [increment]);

  return (
    <div className="container mt-5">
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
