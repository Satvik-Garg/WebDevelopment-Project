import React from "react";
import ReactDOM from "react-dom/client";
// import { Canvas } from "@react-three-fiber";
import { useFrame, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import App from "./App";
import Experience from "./Experiance.jsx";
import "./index.css";
import { useRef } from "react";

// const moveCamera = (camera) => {
//   camera.position.x += 0.01; // Move camera along the x-axis
//   camera.rotation.y += 0.01; // Rotate camera around the y-axis
// };

export default function Attach() {
  //  const cameraRef = useRef();
  //   useFrame(() => moveCamera(cameraRef.current));
  const ref = useRef();
  const HandleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="scene2Container">
        <Canvas
          onMouseUp={HandleClick}
          camera={{
            fov: 5,
            near: 0.1,
            far: 2000,
            position: [-1, 1.5, 5],
          }}
        >
          {/* <perspectiveCamera
           ref={cameraRef}
           position={[0, 0, 5]} // Initial camera position
         /> */}
          {/* <OrbitControls args={[cameraRef.current]} /> */}
          <Experience />
        </Canvas>
      </div>
      <div className="scene1Container">
        <Canvas
          ref={ref}
          camera={{
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [-3, 1.5, 4],
          }}
        >
          <App />
        </Canvas>
      </div>
    </div>
  );
}
