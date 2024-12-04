import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import Button from "../utils/Button";
import { useTheme } from "../utils/ThemeContext";
import { navLinks } from "../constants/index.js";
import AudioButton from "../utils/AudioButton";

const Navbar = () => {
  const { isDark, setIsDark } = useTheme();

  const themeAudioRef = useRef(null);
  const linkAudioRef = useRef(null);

  const toggleTheme = () => {
    themeAudioRef.current.currentTime = 0;
    themeAudioRef.current.play().catch((error) => {
      console.log("Theme toggle audio playback failed:", error);
    });
    setIsDark(!isDark);
  };

  const toggleLinkAudio = () => {
    linkAudioRef.current.currentTime = 0;
    linkAudioRef.current.play().catch((error) => {
      console.log("toggle audio playback failed:", error);
    });
  };

  const [isAudioPlaying, setIsAudioPlaying] = useState(true);
  const [isIndicatorActive, setIsIndicatorActive] = useState(true);
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
    themeAudioRef.current.currentTime = 0;
    themeAudioRef.current.play();
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(
      navContainerRef.current,
      {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2,
      },
      "nav"
    );
  }, [isNavVisible]);

  useEffect(() => {
    const audioElement = audioElementRef.current;
    const playAudio = () => {
      audioElement.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    };

    const handleUserInteraction = () => {
      playAudio();
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 bg-light-primary dark:bg-dark-primary"
    >
      <audio ref={themeAudioRef} src="/audios/mouse-click.wav" preload="auto" />
      <audio ref={linkAudioRef} src="/audios/modern-tech.wav" preload="auto" />
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex items-center justify-between size-full p-4">
          <div className="flex items-center gap-0">
            <img
              src="/model-light.png"
              alt="logo"
              className="w-10 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
            <Button
              id="theme-toggle"
              onClick={toggleTheme}
              leftIcon={
                <img
                  src={isDark ? "/sun.png" : "/moon.png"}
                  alt="Toggle theme"
                  className="w-5 h-5 transition-all duration-500 hover:scale-125"
                />
              }
              containerClass="mb-2.5 md:flex hidden items-center justify-center gap-1 outline-none border-none"
            />
          </div>
          <div className="flex items-center h-full special-font">
            <div className="hidden md:block">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link}`}
                  onClick={toggleLinkAudio}
                  className={`nav-hover-btn ${isDark ? "text-light-text" : "text-dark-text"}`}
                >
                  {link.name.toLowerCase()}
                </a>
              ))}
            </div>
            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio ref={audioElementRef} src="/audio/loop.mp3" loop />
              <AudioButton isPlaying={isAudioPlaying} />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
