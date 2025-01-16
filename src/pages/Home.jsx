import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader  from "../components/Loader";
import Island from "../models/Island";
import { OrbitControls } from '@react-three/drei';
import Sky from "../models/sky";

function Home() {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPostion = [0, -6.5, -43];
    let islandRotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
        screenScale = [0.9, 0.9, 0.9];
    } else {
        screenScale = [1, 1, 1];
    }

    return [screenScale, screenPostion, islandRotation];
}

const [islandScale, islandPosition,islandRotation] = adjustIslandForScreenSize();

  return (
    <div>
      <section className="w-full h-screen relative">
      <Canvas>
        <Suspense fallback={<Loader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
          <Island
          position = {islandPosition}
          scale = {islandScale}
          rotation = {islandRotation}
          />
          <Sky />
        </Suspense>
      </Canvas>
      </section>
    </div>
  );
}

export default Home;
