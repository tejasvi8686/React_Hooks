import React from "react";
import { useState, useMemo } from "react";

const useMemos = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("calculation done!");
    return Math.pow(num, 3);
  }

  const result = useMemo(() => cubeNum(number), [number]);
  return (
    <div>
      <input
        value={number}
        type="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h1>Cube of the number: {result}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ++
      </button>
      <h1>Counter : {counter}</h1>
    </div>
  );
};

export default useMemos;
