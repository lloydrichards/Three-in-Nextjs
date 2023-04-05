"use client";
import { Grid, MapControls, MapControlsProps } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { Building } from "./Building";

type ControlProps = { isometric?: boolean } & MapControlsProps;

const Controls = React.forwardRef<
  React.ElementRef<typeof MapControls>,
  ControlProps
>(({ isometric, ...props }, ref) => {
  const camera = useThree((state) => state.camera);
  useEffect(() => {
    if (isometric) {
      console.log(camera);
      camera.position.set(50, 80, 100);
      camera.rotation.set(0, 0, 0);
    } else {
      camera.position.set(0, 100, 0);
      camera.rotation.set(0, 0, 0);
    }
  }, [isometric]);
  return <MapControls ref={ref} enableRotate={false} {...props} />;
});
Controls.displayName = "Controls";

export default function Home() {
  const cameraControlRef = useRef<React.ElementRef<typeof MapControls>>(null!);
  const [iso, setIso] = useState(false);
  return (
    <main className="h-full w-full">
      <nav className="absolute z-10 flex flex-col gap-2 p-4">
        <button
          className="btn-outline btn"
          onClick={() => {
            cameraControlRef.current.reset();
            setIso(false);
          }}
        >
          Reset
        </button>
        <button
          className={` btn ${iso ? "btn-info" : "btn-outline"}`}
          onClick={() => {
            setIso(!iso);
          }}
        >
          Isometric
        </button>
      </nav>
      <Canvas
        orthographic
        camera={{
          position: [0, 100, 0],
          rotation: [-Math.PI / 2, 0, 0],
          zoom: 20,
          near: 1,
        }}
      >
        <ambientLight />
        <pointLight position={[100, 100, 10]} />
        <Controls ref={cameraControlRef} isometric={iso} />
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
