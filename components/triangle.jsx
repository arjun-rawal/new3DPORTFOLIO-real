import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
 
function Triangle(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(({clock},state, delta) => {
    const a = clock.getElapsedTime();
    ref.current.rotation.y = a
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      ref={ref}

      >
      <octahedronGeometry args={[2.25, 0]}/>
      <meshStandardMaterial
      color={"blue"}
      />
    </mesh>
  );
}
 
export default Triangle;