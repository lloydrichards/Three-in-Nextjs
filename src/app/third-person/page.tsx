"use client";
import { Grid, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DoubleSide } from "three";
import { Cube } from "./Cube";
import { ThirdPersonCamera } from "./ThirdPersonCamera";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ThirdPersonCamera />
        <Cube />
        <Grid
          position={[0, -0.01, 0]}
          args={[10, 10]}
          cellColor="#6f6f6f"
          cellSize={0.5}
          cellThickness={1}
          sectionSize={2.5}
          sectionThickness={1.5}
          sectionColor="#4682b4"
          followCamera={false}
          infiniteGrid
          side={DoubleSide}
        />
        <Loader />
      </Canvas>
    </main>
  );
}
