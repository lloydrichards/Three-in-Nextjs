import React from "react";

const World = () => {
  return (
    <group>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[25, 25]} />
        <meshStandardMaterial color="limestone" />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 2, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="salmon" />
      </mesh>
    </group>
  );
};

export default World;
