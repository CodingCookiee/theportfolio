import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useTheme } from "../utils/ThemeContext";


import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/Loading.jsx";
import { workExperiences } from "../constants/index.js";
import { CustomOrbitControls } from "../components/CustomOrbitControls";

const Experiences = () => {
  const [animationName, setAnimationName] = useState("idle");
  const { isDark } = useTheme();

  return (
    <section className="c-space my-20">
      <div className="w-full">
        <p className="head-text text-center special-font text-light-text dark:text-dark-text transition-colors duration-300">
          <b>My Work Experience</b>
        </p>

        <div className="work-container">
          <div className="work-canvas bg-light-secondary dark:bg-dark-secondary border border-light-text/10 dark:border-dark-text/10 transition-colors duration-300">
            <Canvas>
              <ambientLight intensity={isDark ? 5 : 7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight
                position={[10, 10, 10]}
                intensity={isDark ? 0.8 : 1}
              />
              <CustomOrbitControls />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content bg-light-secondary dark:bg-dark-secondary border border-light-text/10 dark:border-dark-text/10 transition-colors duration-300">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() =>
                    setAnimationName(item.animation.toLowerCase())
                  }
                  onPointerOut={() => setAnimationName("idle")}
                  className="work-content_container hover:bg-light-primary/50 dark:hover:bg-dark-primary/50 transition-colors duration-300"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo bg-light-primary dark:bg-dark-primary transition-colors duration-300">
                      <img
                        className={`w-full h-full ml-1 ${isDark ? "invert" : ""} transition-all duration-300`}
                        src={item.icon}
                        alt=""
                      />
                    </div>
                    <div className="work-content_bar bg-light-text/10 dark:bg-dark-text/10 group-hover:bg-light-text/20 dark:group-hover:bg-dark-text/20 transition-colors duration-300" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-light-text dark:text-dark-text transition-colors duration-300">
                      {item.name}
                    </p>
                    <p className="text-sm mb-5 text-light-text/80 dark:text-dark-text/80 transition-colors duration-300">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="text-light-text/60 dark:text-dark-text/60 group-hover:text-light-text dark:group-hover:text-dark-text transition-colors duration-300">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
