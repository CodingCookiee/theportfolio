import { useState, useEffect, useCallback, Suspense } from "react";
import Lottie from "lottie-react";
import robotAnimation from "/src/robot.json";
import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experiences from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useTheme } from "./utils/ThemeContext";
import { ThemeProvider } from "./utils/ThemeContext";
import CustomCursor from "./utils/CustomCursor";
import { preloadResources } from "./utils/resourcePreloader";

const LoadingScreen = () => {
  const { isDark } = useTheme();
  const { progress } = useProgress();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`h-screen w-screen flex items-center justify-center ${
        isDark ? "bg-dark-primary" : "bg-violet-50"
      }`}
    >
      <div className="flex flex-col items-center">
      <Lottie
          animationData={robotAnimation}
          loop={true}
          autoplay={true}
          style={{
            width: 300,
            height: 300,
            filter: isDark ? "invert(1)" : "none",
          }}
      
          rendererSettings={{
        
            progressiveLoad: true
          }}
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-xl -mt-10 ${isDark ? "text-white" : "text-black"}`}
        >
          {Math.round(progress)}%
        </motion.p>
      </div>
    </motion.div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [audioIndicatorEnabled, setAudioIndicatorEnabled] = useState(false);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const { progress } = useProgress();

  useEffect(() => {
    const loadResources = async () => {
      requestAnimationFrame(async () => {
        const result = await preloadResources();
        setResourcesLoaded(result);
      });
    };
    loadResources();
  }, []);

  useEffect(() => {
    if (progress === 100 && resourcesLoaded) {
      requestAnimationFrame(() => {
        setLoading(false);
      });
    }
  }, [progress, resourcesLoaded]);

  const handleFirstClick = useCallback(() => {
    setAudioEnabled(true);
    setAudioIndicatorEnabled(true);
  }, []);

  const mainContent = (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="App min-h-screen flex flex-col dark:bg-dark-primary bg-light-primary transition-colors duration-300"
    >
      <CustomCursor onFirstClick={handleFirstClick} />
      <Navbar
        audioEnabled={audioEnabled}
        audioIndicatorEnabled={audioIndicatorEnabled}
      />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Skills />
      <Contact />
      <Footer />
    </motion.div>
  );

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading ? <LoadingScreen /> : mainContent}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
