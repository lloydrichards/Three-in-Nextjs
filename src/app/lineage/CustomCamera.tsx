import { CameraControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import control from "camera-controls";
import React from "react";

//NOTE: eyeballed number
const MAX_ZOOM = 0.8;
const MIN_ZOOM = 0.2;

interface Handles {
  center: () => void;
  zoom: (step: number) => void;
}

interface Props {
  onZoomChange: (zoom: number, maxZoom: number, minZoom: number) => void;
}

const Controls: React.ForwardRefRenderFunction<Handles, Props> = (
  { onZoomChange },
  ref
) => {
  const controlsRef = React.useRef<any>();
  const camera = useThree((state) => state.camera as THREE.OrthographicCamera);
  const { gl, invalidate } = useThree();
  useFrame((_, delta) => {
    controlsRef.current?.update(delta);
    invalidate();
  });

  React.useEffect(() => {
    const onCameraStopMoving = () =>
      onZoomChange(controlsRef.current._zoom, MAX_ZOOM, MIN_ZOOM);

    const onDragStart = () => {
      document.body.style.cursor = "grabbing";
    };
    const onDragEnd = () => {
      document.body.style.cursor = "default";
    };

    controlsRef.current?.addEventListener("update", onCameraStopMoving);
    controlsRef.current?.addEventListener("controlstart", onDragStart);
    controlsRef.current?.addEventListener("controlend", onDragEnd);
    return () => {
      controlsRef.current?.removeEventListener("update", onCameraStopMoving);
      controlsRef.current?.removeEventListener("controlstart", onDragStart);
      controlsRef.current?.removeEventListener("controlend", onDragEnd);
    };
    // We do need to include controlsRef.current despite what eslint says, otherwise the camera glitches out on ocasions
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onZoomChange, controlsRef.current]);

  React.useImperativeHandle<React.ElementRef<any>, Handles>(ref, () => ({
    center() {},
    zoom(step: number) {},
  }));

  return (
    <CameraControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      draggingDampingFactor={1}
      minZoom={MIN_ZOOM}
      maxZoom={MAX_ZOOM}
      mouseButtons={{
        left: control.ACTION.OFFSET,
        middle: control.ACTION.NONE,
        right: control.ACTION.NONE,
        wheel: control.ACTION.ZOOM,
      }}
    />
  );
};

export default React.forwardRef(Controls);
