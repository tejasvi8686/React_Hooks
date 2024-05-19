import React, { useEffect, useState } from "react";

const useEffects = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, [count]);

  return (
    <div>
      <h1>I have render {count} times!</h1>
    </div>
  );
};

export default useEffects;
