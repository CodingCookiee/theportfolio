import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const CustomOrbitControls = () => {
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      const controls = controlsRef.current;
      const domElement = controls.domElement;

      // Add passive wheel event listener
      domElement.addEventListener("wheel", () => {}, { passive: true });

      return () => {
        domElement.removeEventListener("wheel", () => {});
      };
    }
  }, []);

  return (
    <OrbitControls
      ref={controlsRef}
      maxPolarAngle={Math.PI / 2}
      enableZoom={false}
      makeDefault
      enableDamping={true}
      dampingFactor={0.05}
      rotateSpeed={0.5}
      mouseButtons={{
        LEFT: THREE.MOUSE.ROTATE,
      }}
      touches={{
        ONE: THREE.TOUCH.ROTATE,
      }}
      enablePan={false}
    />
  );
};
