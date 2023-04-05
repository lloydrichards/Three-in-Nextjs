import { useFrame, useThree } from "@react-three/fiber";
import { FC, useRef } from "react";
import { Mesh, Vector3 } from "three";
import useKeyboard from "./useKeyboard";

export const Cube: FC = () => {
  const ref = useRef<Mesh>(null!);
  const keyMap = useKeyboard();
  const camera = useThree((s) => s.camera);

  useFrame((_, delta) => {
    keyMap["KeyA"] && (ref.current.rotation.y += 1 * delta);
    keyMap["KeyD"] && (ref.current.rotation.y -= 1 * delta);
    keyMap["KeyW"] && (ref.current.position.z -= 1 * delta);
    keyMap["KeyS"] && (ref.current.position.z += 1 * delta);
    const newCameraPosition = new Vector3(
      ref.current.position.x,
      ref.current.position.y,
      ref.current.position.z
    ).add(new Vector3(0, 10, 10));
    const newCameraLookAt = new Vector3(
      ref.current.position.x,
      ref.current.position.y,
      ref.current.position.z
    ).sub(new Vector3(0, 0, 15));


    camera.position.lerp(newCameraPosition, 0.05);
    camera.lookAt(newCameraLookAt);
  });

  return (
    <mesh ref={ref} position={[0, 1, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"salmon"} />
    </mesh>
  );
};
