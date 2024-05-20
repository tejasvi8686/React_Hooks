import React, { useEffect, useLayoutEffect } from "react";

const LayoutEffectsComponent = () => {
  useEffect(() => {
    console.log("message from useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("message from useLayoutEffect");
  }, []);

  return (
    <div>
      <h1>Test Message</h1>
      <ul>
        {Array(40)
          .fill("")
          .map((item, index) => (
            <li key={index}>{Math.pow(Math.random(), 10)}</li>
          ))}
      </ul>
    </div>
  );
};

export default LayoutEffectsComponent;
