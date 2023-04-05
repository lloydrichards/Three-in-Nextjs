import { Html, MeshWobbleMaterial } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import React, { FC } from "react";
interface BlobProps {
  position: Vector3;
  children?: React.ReactNode;
}

export const Blob: FC<BlobProps> = ({ position, children }) => {
  return (
    <mesh position={position}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <MeshWobbleMaterial
        factor={0.2}
        speed={4}
        color="limegreen"
        opacity={0.8}
        transparent
      />
      <Html
        center
        distanceFactor={40}
        style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
        position={[0, 2.5, 0]}
      >
        {children}
      </Html>
    </mesh>
  );
};
