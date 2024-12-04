import { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { ThemeProvider } from "./utils/ThemeContext";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      ) : (
        <ThemeProvider>
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
        </ThemeProvider>
      )}
    </>
  );
};

export default App;
