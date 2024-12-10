import { useTheme } from "../utils/ThemeContext";
import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Button from "../components/Button.jsx";
import Target from "../components/Target.jsx";
import CanvasLoader from "../components/Loading.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import { calculateSizes } from "../constants/index.js";
import { HackerRoom } from "../components/Model.jsx";

const Hero = () => {
  const { isDark } = useTheme();
  return (
    <section className="min-h-screen w-full flex flex-col relative " id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p
          className={` sm:text-3xl text-xl ${isDark ? "text-white" : "text-neutral-600"}  special-font text-center font-generalsans font-medium `}
        >
          Hi, I am <b>Raza Awan</b>{" "}
          <span className="waving-hand">
            <img
              src="/assets/waving.svg"
              alt=""
              className="ml-2.5 w-8 h-8"
            ></img>
          </span>
        </p>
        <p className="hero_tag text-gray_gradient ">
          Prioritizing Creativity and Minimalism
        </p>
      </div>
    </section>
  );
};

export default Hero;
