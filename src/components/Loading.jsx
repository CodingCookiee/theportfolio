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
        {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
      </p>
    </Html>
  );
};

export default CanvasLoader;
