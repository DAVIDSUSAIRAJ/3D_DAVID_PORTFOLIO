import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";

function Sky() {
    const sky = useGLTF(skyScene);
  return (
    <mesh>
   <primitive object={sky.scene} />
      
    </mesh>
  )
}

export default Sky
