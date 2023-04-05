import { MeshProps, useFrame, Vector3 } from "@react-three/fiber";
import { Ref, useRef, useState } from "react";
import { motion } from "framer-motion-3d";
import { Mesh } from "three";

type BoxProps = {
  position: Vector3;
};

export const Box: React.FC<BoxProps> = (props) => {
  const ref = useRef<Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame(() => {
    if (!ref.current) return;
    if (clicked) {
      ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.005;
      ref.current.rotation.z += 0.005;
    } else {
      ref.current.rotation.x -= 0.01;
      ref.current.rotation.y -= 0.01;
      ref.current.rotation.z -= 0.001;
    }
  });

  return (
    <motion.mesh
      {...props}
      ref={ref as any}
      animate={{
        scale: hovered ? 1.5 : 1,
      }}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <motion.meshStandardMaterial
        animate={{
          color: hovered ? "#ff69b4" : clicked ? "#ff8c00" : "#4682b4",
        }}
        transition={{
          duration: 0.8,
        }}
      />
    </motion.mesh>
  );
};
