import { useTheme } from "./ThemeContext";

const AudioButton = ({ isPlaying }) => {
  const { isDark } = useTheme();

  return (
    //   ${isDark ? "bg-white" : "bg-blue-200"}
    <div
      className={`flex items-center px-2 py-1 justify-center  rounded-lg  ${isPlaying ? "bg-yellow-400" : ""}`}
    >
      <div className="self-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110">
        <svg
          viewBox="0 0 12 9"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <g fill={isPlaying ? "white" : isDark ? "white" : "#1a1a1a"}>
            <path
              d="M 0 4 C 0 4 0 3 1 3 L 2 3 L 3 2 C 5 0 5 1 5 2 L 5 7 C 5 8 5 9 3 7 L 2 6 L 1 6 C 0 6 0 5 0 5 L 0 4"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transformOrigin: "0px 0px",
              }}
              data-svg-origin="0 0.845299482345581"
              transform="matrix(1,0,0,1,0,0)"
            />
            <path
              d="M 7 4 C 8 4 8 5 7 5 C 6 5 6 6 7 6 C 9 6 9 3 7 3 C 6 3 6 4 7 4"
              className="transition-opacity duration-300"
              style={{ opacity: isPlaying ? 1 : 0 }}
            />
            <path
              d="M 7 2 C 10 2 10 7 7 7 C 6 7 6 8 7 8 C 11 8 11 1 7 1 C 6 1 6 2 7 2"
              className="transition-opacity duration-300"
              style={{ opacity: isPlaying ? 1 : 0 }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
export default AudioButton;
