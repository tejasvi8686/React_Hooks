// import React, { useEffect, useState, useRef, useReducer } from "react";

// const useRefs = () => {
//   const [value, setValue] = useState(0);

//    const count = useRef(0);

//    useEffect(() => {
//     count.current = count.current + 1;
//    })



//   return (
//     <div>
//       <button
//         onClick={() => {
//           setValue((prev) => prev + 1);
//         }}
//       >
//         +1
//       </button>
//       <h1>{value}</h1>
//       <button
//         onClick={() => {
//           setValue((prev) => prev - 1);
//         }}
//       >
//         -1
//       </button>
//       <h1>Render Count: {count.current}</h1>
//     </div>
//   );
// };

// export default useRefs;



import React , { useEffect, useState, useRef, useReducer } from 'react'

const useRefs = () => {
    const inputElem = useRef();

    const btnClickend = () => {
        console.log(inputElem.current);
        inputElem.current.style.background = "blue";
    }
  return (
    <div>
      <input type="text" ref={inputElem} />
      <button onClick={btnClickend}>Click Here</button>
    </div>
  )
}

export default useRefs
