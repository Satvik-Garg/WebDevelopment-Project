import {
  useScroll,
  Stage,
  ScrollControls,
  useMatcapTexture,
  Center,
  Text3D,
  OrbitControls,
  MeshRefractionMaterial,
  Environment,
} from "@react-three/drei";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import { Perf } from "r3f-perf";
import React, {useLayoutEffect,Suspense } from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { getProject, val } from "@theatre/core";
import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";

//-----------------------------

const torusGeometry = new THREE.TorusGeometry(1, 0.5, 16, 32);
const material = new THREE.MeshNormalMaterial();

export default function Experience() {
  const scroll = useScroll();
  const donuts = useRef([]);
  // const ref = useRef();
  // const tl = useRef();
  // useFrame(()=>{
  //   tl.current.seek(scroll.offset * tl.current.duration())
  // })
// useLayoutEffect(()=>{
// tl.current = gsap.timeline();
// //vertical animation
// tl.current.to(
//   ref.current.position,
//   {
//     duration: 2,
//     y : -2.3*(2)  },
//     0
// )

// },[])

  const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);

  useFrame((state, delta) => {
    for (const donut of donuts.current) {
      donut.rotation.y += delta * 0.2;
    }
  });

  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding;
    matcapTexture.needsUpdate = true;
console.log(Stage)
    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  return (
    <>
      <Stage
        adjustCamera={true}
        // contactShadow={{ opacity: 0.3, blur: 5 }}
        // environment="sunset"
        // intensity={3}
      >
        {/* <Perf position="top-left" /> */}

        <OrbitControls makeDefault enableZoom={false} />
        <color args={["#695b5b"]} attach="background" />
        {/* <ScrollControls pages={2} damping={0.25}> */}

        <Center>
          <Text3D
            material={material}
            font="./fonts/helvetiker_regular.typeface.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position={[0, 10, 0]}
          >
            ProJect Hive
          </Text3D>
        </Center>
      </Stage>
     
        {[...Array(50)].map((value, index) => (
          <mesh
            ref={(element) => (donuts.current[index] = element)}
            key={index}
            geometry={torusGeometry}
            material={material}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
            ]}
            scale={0.2 + Math.random() * 0.2}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            <torusGeometry args={[2, 0.6, 16, 32]} />
          </mesh>
        ))}
     
      {/* {/* </ScrollControls> */}
    </>
  );
}
