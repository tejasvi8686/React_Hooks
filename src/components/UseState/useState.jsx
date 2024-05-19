// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [color, setColor] = useState("Red");

//   const changeColor = () => {
//     setColor("Blue");
//   };

//   return (
//     <div>
//       <h1>My fav color is {color}</h1>
//       <button onClick={changeColor}>Blue</button>
//     </div>
//   );
// }

// export default App;

// import React from "react";

// const App1 = () => {
//   const [counter, setCounter] = useState(0);

//   const increment = () => {
//     setCounter(counter + 1);
//   };

//   const decrment = () => {
//     setCounter(counter - 1);
//   };

//   const reset = () => {
//     setCounter(0)
//   }

//   return (
//     <div>
//       <button onClick={increment}>+</button>
//       <div>{counter}</div>
//       <button onClick={decrment}>-</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };

// export default App1;

// import { useState } from "react";

// import React from "react";

// const App2 = () => {
//   const [car, setCar] = useState({
//     brand: "ferrari",
//     modal: "Roma",
//     year: "2024",
//     color: "red",
//   });
//   const changeColor = () => {
//     setCar((prev) => {
//       return { ...prev, color: "blue" };
//     });
//   };
//   return (
//     <div>
//       <h1>My {car.brand}</h1>
//       <h2>
//         It is a {car.color} {car.modal} from {car.year}
//       </h2>

//       <button onClick={changeColor}>blue</button>
//     </div>
//   );
// };

// export default App2;

import { useState } from "react";
import React from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default UseState;
