import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();

  useFrame((state, delta) => {
    // Keep camera position damping
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    // Only apply rotation to Y-axis (horizontal movement)
    easing.dampE(
      group.current.rotation,
      [0, state.pointer.x / 5, 0], // Only Y-axis rotation
      0.25,
      delta,
    );
  });

  return <group ref={group}>{children}</group>;
};

export default HeroCamera;
