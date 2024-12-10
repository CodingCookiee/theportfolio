import { useGLTF, useTexture } from '@react-three/drei';
import { useTheme } from "../utils/ThemeContext";
import { useEffect, useState } from 'react';

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/model.glb');
  const { isDark } = useTheme();
  const [currentScreenTexture, setCurrentScreenTexture] = useState(null);

  // Preload both textures
  const darkScreenTexture = useTexture('/textures/desk/screen.png');
  const lightScreenTexture = useTexture('/textures/desk/screen-dark.png');
  const monitortxt = useTexture('textures/desk/monitor.png');

  useEffect(() => {
    setCurrentScreenTexture(isDark ? darkScreenTexture : lightScreenTexture);
  }, [isDark, darkScreenTexture, lightScreenTexture]);

  const monitorMaterial = {
    ...materials.computer_mat,
    color: isDark ? '#f1f1f1' : '#484848', 
    metalness: 0.5,
    roughness: 0.7,
  };
  

  return (
    <group {...props} dispose={null}>
     // In the return statement, update the screen mesh
<mesh geometry={nodes.screen_screens_0.geometry} material={materials.screens}>
  <meshMatcapMaterial 
    map={currentScreenTexture}  
  />
</mesh>

      <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />
      <mesh geometry={nodes.table_table_mat_0_1.geometry} material={materials.table_mat} />
      <mesh geometry={nodes.table_table_mat_0_2.geometry}>
        <meshStandardMaterial {...monitorMaterial} map={monitortxt} />
      </mesh>
      <mesh geometry={nodes.table_table_mat_0_3.geometry} material={materials.server_mat} />
      <mesh geometry={nodes.table_table_mat_0_4.geometry} material={materials.vhsPlayer_mat} />
      <mesh geometry={nodes.table_table_mat_0_5.geometry} material={materials.stand_mat} />
      <mesh geometry={nodes.table_table_mat_0_6.geometry} material={materials.mat_mat} />
      <mesh geometry={nodes.table_table_mat_0_7.geometry} material={materials.arm_mat} />
      <mesh geometry={nodes.table_table_mat_0_8.geometry}>
        <meshStandardMaterial {...monitorMaterial} map={monitortxt} />
      </mesh>
      <mesh geometry={nodes.table_table_mat_0_9.geometry} material={materials.cables_mat} />
      <mesh geometry={nodes.table_table_mat_0_10.geometry} material={materials.props_mat} />
      <mesh geometry={nodes.table_table_mat_0_11.geometry} material={materials.ground_mat} />
      <mesh geometry={nodes.table_table_mat_0_12.geometry} material={materials.key_mat} />
    </group>
  );
}
useGLTF.preload('/models/model.glb');
