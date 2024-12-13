import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { useTheme } from '../utils/ThemeContext';
import * as THREE from 'three';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const { isDark } = useTheme();

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20" id='work'>
      <p className={` head-text ${isDark ? 'text-dark-text' : 'text-light-text'} special-font text-center `}><b>My Selected Work</b></p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className={`flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl ${isDark ? 'bg-dark-secondary' : 'bg-light-secondary'}`}>
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-5 my-5">
            <p className={`text-2xl font-semibold animatedText ${isDark ? 'text-dark-text' : 'text-light-text'}`}>{currentProject.title}</p>

            <p className={`animatedText ${isDark ? 'text-dark-text' : 'text-light-text'}`}>{currentProject.desc}</p>
            <p className={`animatedText ${isDark ? 'text-dark-text' : 'text-light-text'}`}>{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className={`tech-logo ${isDark ? 'bg-dark-secondary' : 'bg-light-secondary'}`}>
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

           
<a
  className={`flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity ${
    isDark ? 'text-dark-text' : 'text-light-text'
  }`}
  href={currentProject.href}
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => {
    e.preventDefault();
    window.open(currentProject.href, '_blank');
  }}
>
  <p>Check Live Site</p>
  <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
</a>

          </div>

          <div className="flex justify-between items-center mt-7">
            <button className={`arrow-btn ${isDark ? 'bg-dark-secondary' : 'bg-light-primary'}`} onClick={() => handleNavigation('previous')}>
            <img src="/assets/left-arrow.svg" alt="left arrow" className={isDark ? 'invert' : ''} />

            </button>

            <button className={`arrow-btn ${isDark ? 'bg-dark-secondary' : 'bg-light-primary'}`} onClick={() => handleNavigation('next')}>
            <img src="/assets/right-arrow.svg" alt="right arrow" className={isDark ? 'invert' : ''} />

      
            </button>
          </div>
        </div>

        <div className={`border-none shadow-2xl rounded-lg h-96 md:h-full ${isDark ? 'bg-dark-secondary border-dark-text' : 'bg-light-secondary border-light-text'}`}>
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls 
    maxPolarAngle={Math.PI / 2} 
    enableZoom={false}
    makeDefault
    enableDamping={true}
    dampingFactor={0.05}
    rotateSpeed={0.5}
    mouseButtons={{
      LEFT: THREE.MOUSE.ROTATE
    }}
    touches={{
      ONE: THREE.TOUCH.ROTATE
    }}
    enablePan={false}
    listenToKeyEvents={window}
    eventOptions={{ passive: true }}
  />

          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
