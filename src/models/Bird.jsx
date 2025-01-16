import React from 'react'
import { useGLTF } from '@react-three/drei'
import birdScene from '../assets/3d/bird.glb'

function Bird() {
    const bird = useGLTF(birdScene)
  return (
    <mesh >
        <primitive object={bird.scene} />
      
    </mesh>
  )
}

export default Bird
