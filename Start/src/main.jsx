import "./index.css";
// import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import App from "./App.jsx";
import Experience from "./Experiance.jsx";
import Attach  from "./Attach.jsx";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import React, { Suspense } from "react";
// import ReactDOM from "react-dom/client";

studio.extend(extension);
studio.initialize();

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
   <Suspense fallback={null}>
  <Attach />
  </Suspense>
);
