import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "/public/loading.json";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useTheme } from "./utils/ThemeContext";
import { ThemeProvider } from "./utils/ThemeContext";

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
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto">
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;
