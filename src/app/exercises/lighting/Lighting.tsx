import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import React, { useRef } from "react";
import {
  DirectionalLightHelper,
  PointLightHelper,
  SpotLightHelper,
} from "three";

const Lighting = () => {
  const pointRef = useRef<THREE.PointLight>(null!);
  const dirRef = useRef<THREE.DirectionalLight>(null!);
  const spotRef = useRef<THREE.SpotLight>(null!);
  const ambientCtl = useControls("Ambient Light", {
    visible: false,
    intensity: {
      value: 1.0,
      min: 0,
      max: 1.0,
      step: 0.1,
    },
  });

  const directionalCtl = useControls("Directional Light", {
    visible: true,
    position: {
      x: 3.3,
      y: 1.0,
      z: 4.4,
    },
    castShadow: true,
  });

  const pointCtl = useControls("Point Light", {
    visible: false,
    position: {
      x: 2,
      y: 4,
      z: 0,
    },
    castShadow: true,
  });

  const spotCtl = useControls("Spot Light", {
    visible: false,
    position: {
      x: 3,
      y: 2.5,
      z: 1,
    },
    castShadow: true,
  });

  useHelper(pointCtl.visible && pointRef, PointLightHelper, 1, "cyan");
  useHelper(
    directionalCtl.visible && dirRef,
    DirectionalLightHelper,
    1,
    "cyan"
  );
  useHelper(spotCtl.visible && spotRef, SpotLightHelper, "cyan");

  return (
    <>
      <ambientLight
        visible={ambientCtl.visible}
        intensity={ambientCtl.intensity}
      />
      <directionalLight
        ref={dirRef}
        visible={directionalCtl.visible}
        position={[
          directionalCtl.position.x,
          directionalCtl.position.y,
          directionalCtl.position.z,
        ]}
        castShadow={directionalCtl.castShadow}
      />
      <pointLight
        ref={pointRef}
        visible={pointCtl.visible}
        position={[
          pointCtl.position.x,
          pointCtl.position.y,
          pointCtl.position.z,
        ]}
        castShadow={pointCtl.castShadow}
      />
      <spotLight
        ref={spotRef}
        visible={spotCtl.visible}
        position={[spotCtl.position.x, spotCtl.position.y, spotCtl.position.z]}
        castShadow={spotCtl.castShadow}
      />
    </>
  );
};

export default Lighting;
