"use client";
import {
  CameraControls,
  GizmoHelper,
  GizmoViewport,
  Grid,
  Icosahedron,
  MapControls,
  OrthographicCamera,
} from "@react-three/drei";
import { Canvas, Euler } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Building } from "./Building";

const isometric: Euler = [Math.PI * (1 / 4), Math.PI * (4 / 6), 0];

export default function Home() {
  const cameraControlRef = useRef<React.ElementRef<typeof MapControls>>(null!);

  return (
    <main className="h-full w-full">
      <nav className="absolute z-10 flex flex-col gap-2 p-4">
        <button
          className="btn-outline btn"
          onClick={() => cameraControlRef.current.reset()}
        >
          Reset
        </button>
      </nav>
      <Canvas
        orthographic
        camera={{
          position: [80, 50, 100],
          zoom: 20,
          near: 1,
        }}
      >
        <ambientLight />
        <pointLight position={[100, 100, 10]} />
        <MapControls ref={cameraControlRef} enableRotate={false} minZoom={10} />
        <group>
          <Building position={[0, 0, 0]} />
          <Building position={[0, 0, 30]} />
          <Building position={[20, 0, 0]} />
          <Building position={[20, 0, 20]} />
        </group>
        <axesHelper args={[15]} />
        <Grid
          position={[0, -0.01, 0]}
          args={[10, 10]}
          cellColor="#6f6f6f"
          cellSize={0.5}
          cellThickness={1}
          sectionSize={2.5}
          sectionThickness={1.5}
          sectionColor="#4682b4"
          fadeDistance={500}
          fadeStrength={1}
          infiniteGrid
        />
      </Canvas>
    </main>
  );
}
