import { Vector3 } from "@react-three/fiber";
import React, { FC } from "react";
import { Color, Shape } from "three";

interface LineageNodeProps {
  children?: React.ReactNode;
  position: Vector3;
  color: Color;
  width: number;
  height: number;
  borderRadius?: number;
  onPointerOver?: (e: THREE.Event) => void;
  onPointerOut?: (e: THREE.Event) => void;
}
const LineageNode: FC<LineageNodeProps> = ({
  children,
  color,
  position,
  width,
  height,
  borderRadius,
  onPointerOut,
  onPointerOver,
}) => {
  const meshRef = React.useRef<THREE.Mesh>(null);
  const contentGeometry = roundedRect(
    -width / 2,
    -height / 2,
    width,
    height,
    (borderRadius = 1)
  );
  return (
    <>
      <mesh
        position={position}
        ref={meshRef}
        // raycast={meshBounds}
        onPointerOver={(e) => onPointerOver?.(e)}
        onPointerOut={(e) => onPointerOut?.(e)}
      >
        <shapeGeometry args={[contentGeometry]} />
        <meshBasicMaterial color={color} />
      </mesh>
      {children}
    </>
  );
};

export default LineageNode;

export function roundedRect(x = 0, y = 0, width = 50, height = 50, radius = 5) {
  const shape = new Shape();
  shape.moveTo(x, y + radius);
  shape.lineTo(x, y + height - radius);
  shape.quadraticCurveTo(x, y + height, x + radius, y + height);
  shape.lineTo(x + width - radius, y + height);
  shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  shape.lineTo(x + width, y + radius);
  shape.quadraticCurveTo(x + width, y, x + width - radius, y);
  shape.lineTo(x + radius, y);
  shape.quadraticCurveTo(x, y, x, y + radius);
  shape.closePath();
  return shape;
}
