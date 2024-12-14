import { useGLTF, useTexture } from "@react-three/drei";
import { useTheme } from "../utils/ThemeContext";
import React, { useEffect, useState, useMemo } from "react";
import * as THREE from "three";

export const Model = React.memo(({ ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDark } = useTheme();

  // Call all texture hooks at the top level
  const darkScreenTexture = useTexture("/textures/desk/screen.png");
  const lightScreenTexture = useTexture("/textures/desk/screen.png");
  const monitorTexture = useTexture("textures/desk/monitor.png");

  const { nodes, materials } = useGLTF("/models/model.glb", {
    onLoad: () => setIsLoaded(true),
  });

  // Memoize the current screen texture
  const currentScreenTexture = useMemo(
    () => (isDark ? darkScreenTexture : lightScreenTexture),
    [isDark, darkScreenTexture, lightScreenTexture],
  );

  // Memoize monitor material
  const monitorMaterial = useMemo(
    () => ({
      ...materials.computer_mat,
      color: isDark ? "#f1f1f1" : "#484848",
      metalness: 0.5,
    }),
    [isDark, materials.computer_mat],
  );

  // Handle texture encoding
  useEffect(() => {
    const textures = [darkScreenTexture, lightScreenTexture, monitorTexture];
    textures.forEach((texture) => {
      texture.encoding = THREE.sRGBEncoding;
      texture.needsUpdate = true;
    });
  }, [darkScreenTexture, lightScreenTexture, monitorTexture]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.screen_screens_0.geometry}
        material={materials.screens}
      >
        <meshMatcapMaterial map={currentScreenTexture} />
      </mesh>
      <mesh
        geometry={nodes.screen_glass_glass_0.geometry}
        material={materials.glass}
      />
      <mesh
        geometry={nodes.table_table_mat_0_1.geometry}
        material={materials.table_mat}
      />
      <mesh geometry={nodes.table_table_mat_0_2.geometry}>
        <meshStandardMaterial {...monitorMaterial} map={monitorTexture} />
      </mesh>
      <mesh
        geometry={nodes.table_table_mat_0_3.geometry}
        material={materials.server_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_4.geometry}
        material={materials.vhsPlayer_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_5.geometry}
        material={materials.stand_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_6.geometry}
        material={materials.mat_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_7.geometry}
        material={materials.arm_mat}
      />
      <mesh geometry={nodes.table_table_mat_0_8.geometry}>
        <meshStandardMaterial {...monitorMaterial} map={monitorTexture} />
      </mesh>
      <mesh
        geometry={nodes.table_table_mat_0_9.geometry}
        material={materials.cables_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_10.geometry}
        material={materials.props_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_11.geometry}
        material={materials.ground_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_12.geometry}
        material={materials.key_mat}
      />
    </group>
  );
});

useGLTF.preload("/models/model.glb");

export default Model;
