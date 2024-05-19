import { createBrowserRouter } from "react-router-dom";
import UseState from "../components/UseState/useState";
import Home from "../components/Home/home"

const provider = createBrowserRouter([
  {
    path: "/",
    element : <Home />
  },
  {
    path: "/use-State",
    element: <UseState />,
  }
]);

export default provider;