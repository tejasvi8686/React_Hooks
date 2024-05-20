import { createBrowserRouter } from "react-router-dom";
import UseState from "../components/UseState/useState";
import UseEffect from "../components/UseEffect/useEffect";
import UseRef from "../components/UseRef/useRef";
import UseMemo from "../components/UseMemo/useMemo";
import UseCallback from "../components/UseCallback/useCallback";
import UseReducer from "../components/UseReducer/useReducer";
import Home from "../components/Home/home";

const provider = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/use-State",
    element: <UseState />,
  },
  {
    path: "/use-effect",
    element: <UseEffect />,
  },
  {
    path: "/use-ref",
    element: <UseRef />,
  },
  {
    path: "/use-memo",
    element: <UseMemo />,
  },
  {
    path: "/use-callback",
    element: <UseCallback />,
  },
  {
    path: "/use-reducer",
    element: <UseReducer />,
  },
]);

export default provider;
