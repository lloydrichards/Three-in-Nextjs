"use client";
import { CameraControls, Grid } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide } from "three";
import { Blob } from "./Blob";

export default function Home() {
  const cameraControlRef = useRef<CameraControls>(null!);

  return (
    <main className="h-full w-full">
      <nav className="absolute z-10 flex flex-col gap-2 p-4">
        <button
          className="btn"
          onClick={() => cameraControlRef.current.reset(true)}
        >
          Reset
        </button>
      </nav>
      <Canvas camera={{ position: [0, 5, 10], rotation: [0, 0.5, 0] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <CameraControls ref={cameraControlRef} />
        <axesHelper args={[5]} />
        <Blob position={[4, 1, 3]}>
          <p className="badge w-16">Slim</p>
          <progress
            className="progress progress-success w-16"
            value="70"
            max="100"
          ></progress>
        </Blob>
        <Blob position={[-4, 1, 2]}>
          <p className="badge w-16">Slim</p>
          <progress
            className="progress progress-warning w-16"
            value="20"
            max="100"
          ></progress>
        </Blob>
        <Blob position={[-1, 1, -3]}>
          <p className="badge-error badge w-16">Boss</p>
          <progress
            className="progress progress-success w-16"
            value="100"
            max="100"
          ></progress>
        </Blob>
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
      </Canvas>
    </main>
  );
}
