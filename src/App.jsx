import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { ThemeProvider } from "./utils/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App min-h-screen flex flex-col dark:bg-dark-primary bg-light-primary transition-colors duration-300">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto">
          <section className="h-[1000px]"></section>

          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;