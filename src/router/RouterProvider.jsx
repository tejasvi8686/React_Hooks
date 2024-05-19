import { createBrowserRouter } from "react-router-dom";
import UseState from "../components/UseState/useState";
import UseEffect from "../components/UseEffect/useEffect";
import UseRef from "../components/UseRef/useRef";
import Home from "../components/Home/home"

const provider = createBrowserRouter([
  {
    path: "/",
    element : <Home />
  },
  {
    path: "/use-State",
    element: <UseState />,
  },
  {
    path : "/use-effect",
    element: <UseEffect />
  },
  {
    path : "/use-ref",
    element : <UseRef />
  }
]);

export default provider;