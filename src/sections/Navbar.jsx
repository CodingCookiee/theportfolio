import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import Button from "../utils/CustomButton";
import { useTheme } from "../utils/ThemeContext";
import { navLinks } from "../constants/index.js";
import AudioButton from "../utils/AudioButton";

const Navbar = ({ audioEnabled, audioIndicatorEnabled }) => {
  const { isDark, setIsDark } = useTheme();
  const [isAudioPlaying, setIsAudioPlaying] = useState(audioEnabled);
  const [isIndicatorActive, setIsIndicatorActive] = useState(
    audioIndicatorEnabled
  );
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const clickAudioRef = useRef(null);
  const linkAudioRef = useRef(null);
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    setIsAudioPlaying(audioEnabled);
    setIsIndicatorActive(audioIndicatorEnabled);
  }, [audioEnabled, audioIndicatorEnabled]);

  // Audio Control Effects
  useEffect(() => {
    [clickAudioRef, linkAudioRef, audioElementRef].forEach((ref) => {
      if (ref.current) {
        if (isAudioPlaying) {
          ref.current.volume = ref === audioElementRef ? 0.5 : 0.2;
        } else {
          ref.current.pause();
          ref.current.currentTime = 0;
        }
      }
    });
  }, [isAudioPlaying]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    toggleClickAudio();
  };

  const toggleClickAudio = () => {
    if (isAudioPlaying && clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0;
      clickAudioRef.current.volume = 0.2;
      clickAudioRef.current.play().catch((error) => {
        console.log("click audio playback failed:", error);
      });
    }
  };

  const toggleLinkAudio = () => {
    if (isAudioPlaying && linkAudioRef.current) {
      linkAudioRef.current.currentTime = 0;
      linkAudioRef.current.volume = 0.2;
      linkAudioRef.current.play().catch((error) => {
        console.log("toggle audio playback failed:", error);
      });
    }
  };

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
    [clickAudioRef, linkAudioRef, audioElementRef].forEach((ref) => {
      if (ref.current) {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
    });
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  // Mobile menu animation
  useEffect(() => {
    gsap.to(mobileMenuRef.current, {
      height: isMobileMenuOpen ? "auto" : 0,
      opacity: isMobileMenuOpen ? 1 : 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
  }, [isMobileMenuOpen]);

  // Navigation visibility
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

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-[100px] border-none transition-all duration-700 sm:inset-x-6 bg-light-primary dark:bg-dark-primary rounded-lg shadow-lg"
    >
      <audio ref={clickAudioRef} src="/audios/mouse-click.wav" preload="auto" />
      <audio ref={linkAudioRef} src="/audios/modern-tech.wav" preload="auto" />
      <header className="relative w-full">
        <nav className="flex items-center justify-between px-3 ">
          <div className="flex items-center gap-2">
            <img
              src={
                isDark
                  ? "/assets/favicon-light.svg"
                  : "/assets/favicon-dark.svg"
              }
              alt="logo"
              className="w-10 h-10 sm:w-14 sm:h-14 cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                toggleClickAudio();
                window.location.href = "#Home";
              }}
            />
            <Button
              id="theme-toggle"
              onClick={() => {
                toggleTheme();
                toggleClickAudio();
              }}
              leftIcon={
                <img
                  src={isDark ? "/assets/sun.png" : "/assets/moon.png"}
                  alt="Toggle theme"
                  className=" w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 hover:scale-125"
                />
              }
              containerClass="mt-6 items-center justify-center gap-1 outline-none border-none"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center h-full special-font">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.name}`}
                onClick={toggleLinkAudio}
                className={`nav-hover-btn ${isDark ? "text-light-text" : "text-dark-text"}`}
              >
                {link.name.toLowerCase()}
              </a>
            ))}
            <button
              onClick={toggleAudioIndicator}
              className="ml-6 flex items-center space-x-0.5 !outline-none !border-none"
            >
              <audio
                ref={audioElementRef}
                src="/audios/background_music.mp3"
                loop
              />
              <AudioButton isPlaying={isAudioPlaying} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className={`w-6 h-6 ${isDark ? "text-white" : "text-black"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className={`w-6 h-6 ${isDark ? "text-white" : "text-black"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden bg-light-primary/90 dark:bg-dark-primary/90 backdrop-blur-md"
        >
          <div className="px-4 py-2 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.name}`}
                onClick={() => {
                  toggleLinkAudio();
                  toggleMobileMenu();
                }}
                className="block py-2 text-center text-lg font-medium text-neutral-800 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
              >
                {link.name.toLowerCase()}
              </a>
            ))}
            <div className="flex justify-center py-2 ">
              <button
                onClick={toggleAudioIndicator}
                className="flex items-center space-x-0.5 !outline-none !border-none"
              >
                <AudioButton isPlaying={isAudioPlaying} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
