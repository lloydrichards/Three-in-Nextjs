"use client";
import { Grid, Loader, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DoubleSide } from "three";
import CameraControls from "./CameraControls";
import Lighting from "./Lighting";
import World from "./World";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Canvas camera={{ position: [0, 10, 10] }} shadows>
        <CameraControls />
        <Lighting />
        <World />
        <Loader />
        <Helper />
      </Canvas>
    </main>
  );
}

const Helper = () => {
  return (
    <group>
      <Stats />
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
      <axesHelper args={[4]} />
    </group>
  );
};
