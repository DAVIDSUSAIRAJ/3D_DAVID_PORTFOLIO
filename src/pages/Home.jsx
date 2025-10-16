import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

import sakura from "../assets/sakura.mp3";
import loveit from "../assets/loveit.mp3";
import HomeInfo from "../components/HomeInfo";
import { soundoff, soundon } from "../assets/icons";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import PlaneModel from "../models/PlaneModel";
import Loader from "../components/Loader";
import Island from "../models/Island";
import  bubbleImg from "../assets/images/bubble.png";
import Resume from "../components/Resume";


const Home = () => {
  const audioRef = useRef(new Audio(loveit));
  const isMobileViewRef = useRef(null);
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [0, -1.0, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -1, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [-1, -6, -75.4];
      isMobileViewRef.current = true;
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -1.0, -43.4];
      isMobileViewRef.current = false;
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const handleNextSlide = ()=>{
    if(currentStage === 4){
      setCurrentStage(1);
    }else{
    setCurrentStage(currentStage + 1);
    }
  }
  const handlePreviousSlide = ()=>{
    if(currentStage === 1){
      setCurrentStage(4);
    }else{
    setCurrentStage(currentStage - 1);
    }
  }

  return (
    <>
    <section className="w-full h-screen relative">
      <div className=" w-full absolute left-0 right-0 z-10 flex justify-between items-center top-52 slider">
        <div>
          <span
            className="font-extrabold p-5 text-xl cursor-pointer"
            onClick={handleNextSlide}
          >
            &raquo;
          </span>
        </div>
        <div>
          <span
            className="font-extrabold p-5 text-xl cursor-pointer"
            onClick={handlePreviousSlide}
          >
            &laquo;
          </span>
        </div>
      </div>
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        // className={`w-full h-screen bg-transparent ${
        //   isRotating ? "cursor-grabbing" : "cursor-grab"
        // }`}
        camera={{ near: 0.1, far: 1000 }}
      >
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
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            // setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          {/* <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          /> */}
          <PlaneModel
            isRotating={isRotating}
            rotation={[0, 20.1, 0]}
            position={biplanePosition}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>



<div className="absolute bottom-4 left-4 z-50">
  <div
    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
    title={isPlayingMusic ? "Mute Music" : "Play Music"}
    className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center cursor-pointer hover:bg-black/60 transition duration-300 shadow-lg"
  >
    {isPlayingMusic ? (
      <FaVolumeUp size={22} />
    ) : (
      <FaVolumeMute size={22} />
    )}
  </div>
</div>


      <img
        src={bubbleImg}
        className="absolute top-10 left-10 hero--animate__bubble"
        width={`${ isMobileViewRef.current ? 75:150}`}
        height={`${ isMobileViewRef.current ? 75:150}`}
      />
      <img
        src={bubbleImg}
        className="absolute bottom-10 left-10 hero--animate__bubble"
        width={`${ isMobileViewRef.current ? 75:150}`}
        height={`${ isMobileViewRef.current ? 75:150}`}
      />
      <img
        src={bubbleImg}
        className="absolute bottom-10 right-10 hero--animate__bubble"
        width={`${ isMobileViewRef.current ? 75:150}`}
        height={`${ isMobileViewRef.current ? 75:150}`}
      />
      <img
        src={bubbleImg}
        className="absolute top-10 right-10 hero--animate__bubble"
        width={`${ isMobileViewRef.current ? 75:150}`}
        height={`${ isMobileViewRef.current ? 75:150}`}
      />
    </section>

    <Resume />
    </>
  );
};

export default Home;