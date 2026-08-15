"use client";

import { useGLTF } from "@react-three/drei";

const MODEL_PATH = "/models/aircraft/source/A350-1000.glb";

interface AircraftProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
}

export default function Aircraft({
  position,
  rotation,
  scale = 1,
}: AircraftProps) {
  const { scene } = useGLTF(MODEL_PATH);

  return (
    <primitive
      object={scene}
      position={position}
      rotation={[
        rotation[0],
        rotation[1] + Math.PI / 2,
        rotation[2],
      ]}
      scale={scale}
    />
  );
}

useGLTF.preload(MODEL_PATH);