import { Html, useProgress } from "@react-three/drei";
import { useTheme } from "../utils/ThemeContext";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const { isDark } = useTheme();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: isDark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.8)",
        zIndex: 100,
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: isDark ? "#FFFFFF" : "#000000",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
