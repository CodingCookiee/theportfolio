import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "/src/loading.json";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from './sections/About'
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useTheme } from "./utils/ThemeContext";
import { ThemeProvider } from "./utils/ThemeContext";
import CustomCursor from "./utils/CustomCursor";

const LoadingScreen = () => {
  const { isDark, setIsDark } = useTheme();
  return (
    <div
      className={`h-screen w-screen flex items-center justify-center ${isDark ? "bg-dark-primary" : "bg-violet-50"}`}
    >
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        autoplay={true}
        style={{
          width: 300,
          height: 300,
          filter: isDark ? "invert(1)" : "none",
        }}
      />
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [audioIndicatorEnabled, setAudioIndicatorEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="App min-h-screen flex flex-col dark:bg-dark-primary bg-light-primary transition-colors duration-300">
          <CustomCursor
            onFirstClick={() => {
              setAudioEnabled(true);
              setAudioIndicatorEnabled(true);
            }}
          />
          <Navbar
            audioEnabled={audioEnabled}
            audioIndicatorEnabled={audioIndicatorEnabled}
          />
          <Hero />
          <About/>
          <Projects />
          <Experience />
          <Skills />
          <Contact />
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;
