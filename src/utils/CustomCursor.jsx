import React, { useState, useEffect, useCallback, useRef } from "react";
import { useTheme } from "./ThemeContext";

const CustomCursor = React.memo(({ onFirstClick }) => {
  const { isDark } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [cursorReady, setCursorReady] = useState(false);
  const frameRef = useRef();

  const updateCursor = useCallback((e) => {
    if (cursorReady) {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      frameRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    }
  }, [cursorReady]);

  const handleMouseOver = useCallback((e) => {
    const interactiveElements = [
      "A", "BUTTON", "INPUT", "SELECT", "TEXTAREA",
      "OPTION", "LABEL", "AUDIO", "VIDEO",
    ];
    
    if (interactiveElements.includes(e.target.tagName) ||
        e.target.classList.contains("interactive") ||
        e.target.role === "button") {
      setIsHovering(true);
    }
  }, []);

  const handleMouseOut = useCallback((e) => {
    const relatedTarget = e.relatedTarget || e.toElement;
    if (!relatedTarget || !e.target.contains(relatedTarget)) {
      setIsHovering(false);
    }
  }, []);

  const handleFirstInteraction = useCallback(() => {
    setShowSplash(false);
    onFirstClick();
  }, [onFirstClick]);

  useEffect(() => {
    const timer = setTimeout(() => setCursorReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (cursorReady) {
      window.addEventListener("mousemove", updateCursor, { passive: true });
      document.addEventListener("mouseover", handleMouseOver, { passive: true });
      document.addEventListener("mouseout", handleMouseOut, { passive: true });
      document.addEventListener("click", handleFirstInteraction, { once: true });

      return () => {
        window.removeEventListener("mousemove", updateCursor);
        document.removeEventListener("mouseover", handleMouseOver);
        document.removeEventListener("mouseout", handleMouseOut);
        document.removeEventListener("click", handleFirstInteraction);
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current);
        }
      };
    }
  }, [cursorReady, updateCursor, handleMouseOver, handleMouseOut, handleFirstInteraction]);

  return (
    <div
      className={`fixed pointer-events-none z-[9999] ${
        isHovering ? "scale-[2.5]" : "scale-100"
      } transition-transform duration-300 ease-out`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`,
        willChange: 'transform'
      }}
    >
      {isHovering ? (
        <img
          src="/assets/circle.svg"
          alt=""
          className={`w-8 h-8 ${isDark ? "invert" : ""}`}
        />
      ) : (
        <>
          <div className="w-4 h-4 bg-yellow-400 rounded-full" />
          {showSplash && (
            <div className="relative">
              <div
                className={`absolute -bottom-12 -left-16 whitespace-nowrap text-xs font-generalsans text-center uppercase ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                Click to enable sounds
              </div>
              <div className="absolute -bottom-3 -right-3 p-5 bg-yellow-400 animate-ping border-2 border-yellow-400 rounded-full" />
            </div>
          )}
        </>
      )}
    </div>
  );
});

export default CustomCursor;
