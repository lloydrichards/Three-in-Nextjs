"use client";
import {
  CameraControls,
  GizmoHelper,
  GizmoViewport,
  Grid,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";

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
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry />
          <meshStandardMaterial color={0xff69b4} wireframe />
        </mesh>
        <mesh position={[1, 0.5, 0]}>
          <boxGeometry />
          <meshStandardMaterial color={0xff69b4} />
        </mesh>
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry />
          <meshStandardMaterial color={0xff69b4} />
        </mesh>
        <GizmoHelper alignment="top-right" margin={[80, 80]}>
          <GizmoViewport
            axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
            labelColor="white"
          />
        </GizmoHelper>
        <Grid
          position={[0, -0.01, 0]}
          args={[10, 10]}
          cellColor="#6f6f6f"
          cellSize={0.5}
          cellThickness={1}
          sectionSize={2.5}
          sectionThickness={1.5}
          sectionColor="#4682b4"
          fadeDistance={25}
          fadeStrength={1}
          followCamera={false}
          infiniteGrid
        />
      </Canvas>
    </main>
  );
}
