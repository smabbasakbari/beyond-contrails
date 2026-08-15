"use client";

import * as THREE from "three";

interface RunwayProps {
  progress: number;
}

export default function Runway({
  progress,
}: RunwayProps) {
  /*
   * RUNWAY FADE
   *
   * 0.00 - 0.30  Fully visible
   * 0.30 - 0.40  Fade out
   * 0.40+        Completely blended into background
   */

  const fadeStart = 0.40;
  const fadeEnd = 0.70;

  const fadeProgress = THREE.MathUtils.clamp(
    (progress - fadeStart) /
      (fadeEnd - fadeStart),
    0,
    1
  );

  const fade = THREE.MathUtils.smoothstep(
    fadeProgress,
    0,
    1
  );

  const backgroundColour = new THREE.Color(
    "#06070A"
  );

  const runwayColour = new THREE.Color(
    "#15171b"
  );

  const groundColour = new THREE.Color(
    "#080b0f"
  );

  const markingColour = new THREE.Color(
    "#eeeeee"
  );

  const currentRunwayColour =
    runwayColour.clone().lerp(
      backgroundColour,
      fade
    );

  const currentGroundColour =
    groundColour.clone().lerp(
      backgroundColour,
      fade
    );

  const currentMarkingColour =
    markingColour.clone().lerp(
      backgroundColour,
      fade
    );

  /*
   * ============================
   * RUNWAY CENTRELINE
   * ============================
   */

  const centreLines = Array.from(
    { length: 32 },
    (_, index) => {
      const z = -140 + index * 8;

      return (
        <mesh
          key={index}
          position={[0, 0.015, z]}
        >
          <boxGeometry
            args={[0.45, 0.02, 4]}
          />

          <meshBasicMaterial
            color={currentMarkingColour}
          />
        </mesh>
      );
    }
  );

  /*
   * ============================
   * RUNWAY EDGE LIGHTS
   * ============================
   */

  const edgeLights = Array.from(
    { length: 56 },
    (_, index) => {
      const z = -140 + index * 5;

      return (
        <group key={`edge-${index}`}>

          {/* Left light */}

          <mesh
            position={[
              -11.8,
              0.12,
              z,
            ]}
          >
            <sphereGeometry
              args={[0.12, 12, 12]}
            />

            <meshBasicMaterial
              color="#ffffff"
            />
          </mesh>

          {/* Right light */}

          <mesh
            position={[
              11.8,
              0.12,
              z,
            ]}
          >
            <sphereGeometry
              args={[0.12, 12, 12]}
            />

            <meshBasicMaterial
              color="#ffffff"
            />
          </mesh>

        </group>
      );
    }
  );

  /*
   * ============================
   * CENTRELINE LIGHTS
   * ============================
   */

  const centreLights = Array.from(
    { length: 56 },
    (_, index) => {
      const z = -140 + index * 5.5;

      return (
        <mesh
          key={`centre-light-${index}`}
          position={[
            0,
            0.10,
            z,
          ]}
        >
          <sphereGeometry
            args={[0.09, 12, 12]}
          />

          <meshBasicMaterial
            color="#ffffff"
          />
        </mesh>
      );
    }
  );

  return (
    <group>

      {/* ============================
          MAIN RUNWAY
          ============================ */}

      <mesh
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
      >
        <planeGeometry
          args={[
            26,
            280,
          ]}
        />

        <meshBasicMaterial
          color={currentRunwayColour}
        />
      </mesh>


      {/* ============================
          LEFT RUNWAY EDGE
          ============================ */}

      <mesh
        position={[
          -12.5,
          0.02,
          0,
        ]}
      >
        <boxGeometry
          args={[
            0.3,
            0.02,
            280,
          ]}
        />

        <meshBasicMaterial
          color={currentMarkingColour}
        />
      </mesh>


      {/* ============================
          RIGHT RUNWAY EDGE
          ============================ */}

      <mesh
        position={[
          12.5,
          0.02,
          0,
        ]}
      >
        <boxGeometry
          args={[
            0.3,
            0.02,
            280,
          ]}
        />

        <meshBasicMaterial
          color={currentMarkingColour}
        />
      </mesh>


      {/* ============================
          CENTRELINE
          ============================ */}

      {centreLines}


      {/* ============================
          BLUE EDGE LIGHTS
          ============================ */}

      <group
        visible={fade < 0.98}
      >
        {edgeLights}
      </group>


      {/* ============================
          WHITE CENTRELINE LIGHTS
          ============================ */}

      <group
        visible={fade < 0.98}
      >
        {centreLights}
      </group>


      {/* ============================
          SURROUNDING GROUND
          ============================ */}

      <mesh
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
        position={[
          0,
          -0.04,
          0,
        ]}
      >
        <planeGeometry
          args={[
            500,
            500,
          ]}
        />

        <meshBasicMaterial
          color={currentGroundColour}
        />
      </mesh>

    </group>
  );
}