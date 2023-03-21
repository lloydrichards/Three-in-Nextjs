import { Grid, Text } from "@react-three/drei";
import React, { FC } from "react";
import { Color, DoubleSide } from "three";
import LineageNode from "./LineageNode";

interface LineageProps {
  nodes: { id: number; label: string }[];
  edges: { id: number; start: number; end: number }[];
  selected: number | null;
}

const Lineage: FC<LineageProps> = ({ nodes, edges, selected }) => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {nodes.map((n, i) => (
        <LineageNode
          position={[i * 4, i * 4, 0]}
          color={selected == n.id ? new Color(0x1d8e00) : new Color(0x1d001f)}
          width={8}
          height={3}
        >
          <Text position={[i * 4, i * 4, 0]}>{n.label}</Text>
        </LineageNode>
      ))}
      <Grid
        position={[0, 0, -0.01]}
        rotation={[-Math.PI / 2, 0, 0]}
        side={DoubleSide}
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
    </>
  );
};

export default Lineage;
