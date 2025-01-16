import React from 'react'
import { useGLTF } from '@react-three/drei'
import planeScene from '../assets/3d/plane.glb'


function Plane({isRotating,...props}) {
    const plane = useGLTF(planeScene)
  return (
    <mesh {...props} >
        <primitive object={plane.scene} />
      
    </mesh>
  )
}

export default Plane
