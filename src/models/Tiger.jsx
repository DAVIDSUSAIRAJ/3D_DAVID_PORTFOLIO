import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scene from "../../public/models/tiger.glb";

// 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
const Tiger = ({ currentAnimation, ...props }) =>{
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
     <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, Math.PI / 50, Math.PI / 5]} scale={0.02}
        
        position={[0, -1.0, 0]}  // Moves the tiger slightly down
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="GLTF_created_0_0">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Tiger_Default}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="Object_63_52" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>

  );
}
export default Tiger;
useGLTF.preload(scene);