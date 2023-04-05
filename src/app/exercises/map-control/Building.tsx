import { MeshProps, useFrame, Vector3 } from "@react-three/fiber";
import { Ref, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion-3d";
import { Mesh } from "three";
import * as THREE from "three";

type BoxProps = {
  position: Vector3;
};

export const Building: React.FC<BoxProps> = ({ position }) => {
  const ref = useRef<Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  const building = useMemo(() => {
    const _shape = new THREE.Shape();
    _shape.moveTo(0, 0);
    _shape.lineTo(0, 10);
    _shape.lineTo(-1, 10);
    _shape.lineTo(5, 15);
    _shape.lineTo(11, 10);
    _shape.lineTo(10, 10);
    _shape.lineTo(10, 0);
    _shape.lineTo(0, 0);
    return _shape;
  }, []);

  return (
    <motion.mesh
      position={position}
      ref={ref as any}
      animate={{
        rotateY: clicked ? Math.PI / 2 : 0,
        scaleY: hovered ? 1.1 : 1,
      }}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <extrudeBufferGeometry args={[building, { steps: 2, depth: 10 }]} />
      <motion.meshStandardMaterial
        animate={{
          color: hovered ? "#ff69b4" : "#4682b4",
        }}
        transition={{
          duration: 0.8,
        }}
      />
    </motion.mesh>
  );
};
