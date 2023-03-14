"use client";
import { Canvas } from "@react-three/fiber";
import { Box } from "./Box";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-2, 0, 0]} />
        <Box position={[2, 0, 0]} />
      </Canvas>
    </main>
  );
}
