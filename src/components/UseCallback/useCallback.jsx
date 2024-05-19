import React, { useState , useCallback } from "react";
import Header from "./Header";

const useCallbacks = () => {
  const [count, setCount] = useState(0);

  const newFunction = useCallback (() => {}, [])

  return (
    <div>
      <Header newFunction={newFunction} />
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click here
      </button>
    </div>
  );
};

export default useCallbacks;
