import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scene from "../../public/models/plane_model.glb";
const PlaneModel = ({isRotating,...props}) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="e5bd376021cc4d0db8c4771a7e886884fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.007}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />

                  {/* ✅ Keep only plane-related meshes */}
                  <skinnedMesh
                    name="Plane_Main"
                    geometry={nodes.Object_7.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Plane_Detail_1"
                    geometry={nodes.Object_11.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Plane_Detail_2"
                    geometry={nodes.Object_15.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Plane_Detail_3"
                    geometry={nodes.Object_17.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name="Plane_Detail_4"
                    geometry={nodes.Object_21.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name="Plane_Detail_5"
                    geometry={nodes.Object_25.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <skinnedMesh
                    name="Plane_Detail_6"
                    geometry={nodes.Object_31.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_31.skeleton}
                  />
                  <skinnedMesh
                    name="Plane_Detail_7"
                    geometry={nodes.Object_35.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_35.skeleton}
                  />
                  <skinnedMesh
                    name="Plane_Detail_8"
                    geometry={nodes.Object_39.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_39.skeleton}
                  />
                  <skinnedMesh
                    name="Plane_Detail_9"
                    geometry={nodes.Object_41.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_41.skeleton}
                  />
                  <skinnedMesh
                    name="Plane_Detail_10"
                    geometry={nodes.Object_45.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_45.skeleton}
                  />
                  <skinnedMesh
                    name="Plane_Detail_11"
                    geometry={nodes.Object_47.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_47.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default PlaneModel;
useGLTF.preload(scene);
