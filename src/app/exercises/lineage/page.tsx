"use client";
import { MapControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo, useState } from "react";
import CustomCamera from "./CustomCamera";
import Lineage from "./Lineage";

const node = [
  { id: 1, label: "Apple" },
  { id: 2, label: "Orange" },
  { id: 3, label: "Juice" },
];

const edge = [
  { id: 1, start: 1, end: 3 },
  { id: 2, start: 2, end: 3 },
];

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);
  const data = useMemo(() => {
    if (!selected) return;
    const found = node.at(selected - 1);
    if (!found) return;
    return found;
  }, [selected]);
  return (
    <main className=" grid h-full w-full grid-cols-5 gap-2">
      <Canvas camera={{ position: [0, 0, 10] }} className="col-span-3">
        <CustomCamera onZoomChange={() => {}} />
        <Lineage
          selected={selected}
          setSelected={setSelected}
          nodes={node}
          edges={edge}
        />
      </Canvas>
      <div className="card col-span-2 gap-4 bg-base-300 p-4">
        <h1>Select a Node:</h1>
        <button
          className={`btn ${selected == 1 ? "btn-info" : "btn-outline"}`}
          onClick={() => setSelected(1)}
        >
          Node #1
        </button>
        <button
          className={`btn ${selected == 2 ? "btn-info" : "btn-outline"}`}
          onClick={() => setSelected(2)}
        >
          Node #2
        </button>
        <button
          className={`btn ${selected == 3 ? "btn-info" : "btn-outline"}`}
          onClick={() => setSelected(3)}
        >
          Node #3
        </button>
        <h2>Details:</h2>
        <p>{JSON.stringify(data, null, 2)}</p>
      </div>
    </main>
  );
}
