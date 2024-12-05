import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

const CustomCursor = () => {
  const { isDark } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIshovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const interactiveElements = [
        "A",
        "BUTTON",
        "INPUT",
        "SELECT",
        "TEXTAREA",
        "OPTION",
        "LABEL",
        "AUDIO",
        "VIDEO",
        "IFRAME",
        "CANVAS",
        "EMBED",
        "IMG",
        "SVG",
      ];
      if (
        interactiveElements.includes(e.target.tagName) ||
        e.target.classList.contains("interactive") ||
        e.target.role === "button"
      ) {
        setIshovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const relatedTarget = e.relatedTarget || e.toElement;
      if (!relatedTarget || !e.target.contains(relatedTarget)) {
        setIshovering(false);
      }
    };

    window.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-[9999]  transition-transform duration-300 ease-out`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`,
      }}
    >
      {isHovering ? (
        <img
          src="/assets/circle.svg"
          alt=""
          className={`w-8 h-8 ${isDark ? "invert" : ""}`}
        />
      ) : (
        <div className="w-4 h-4 bg-yellow-400 rounded-full" />
      )}
    </div>
  );
};
export default CustomCursor;
