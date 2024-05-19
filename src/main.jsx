import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import provider from "./router/RouterProvider";

ReactDOM.createRoot(document.getElementById("root")).render(

     <RouterProvider router={provider} />

);
