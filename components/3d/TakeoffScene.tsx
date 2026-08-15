"use client";

import { Canvas } from "@react-three/fiber";

import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";

import {
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";

import {
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";

import * as THREE from "three";

import Aircraft from "./Aircraft";
import Runway from "./Runway";


function FlightAnimation({
  progress,
}: {
  progress: number;
}) {
  const aircraftRef = useRef<THREE.Group>(null);

  let z: number;
  let y: number;
  let pitch: number;

  /*
   * 0.00 - 0.30
   * Aircraft accelerates along the runway.
   */

  if (progress < 0.30) {
    const rawT = progress / 0.30;

    const t = THREE.MathUtils.smoothstep(
      rawT,
      0,
      1
    );

    z = THREE.MathUtils.lerp(
      -220,
      -40,
      t
    );

    /*
     * Aircraft remains firmly on the runway.
     */
    y = 0;

    pitch = 0;
  }

  /*
   * 0.30 - 0.46
   * Rotation.
   */

  else if (progress < 0.46) {
    const rawT =
      (progress - 0.30) / 0.16;

    const t = THREE.MathUtils.smoothstep(
      rawT,
      0,
      1
    );

    /*
     * Continue moving forward while rotating.
     */
    z = THREE.MathUtils.lerp(
      -40,
      -5,
      t
    );

    /*
     * Gradually raise the aircraft.
     *
     * This compensates for the tail dropping
     * as the aircraft rotates around its centre.
     *
     * Importantly, we do NOT start with a
     * floating aircraft.
     */
    y = THREE.MathUtils.lerp(
      0,
      2.5,
      t
    );

    /*
     * Smooth nose-up rotation.
     */
    pitch = THREE.MathUtils.lerp(
      0,
      -0.20,
      t
    );
  }

  /*
   * 0.46 - 1.00
   * Aircraft is airborne and climbs away.
   */

  else {
    const rawT =
      (progress - 0.46) / 0.54;

    const t = THREE.MathUtils.smoothstep(
      rawT,
      0,
      1
    );

    z = THREE.MathUtils.lerp(
      -5,
      55,
      t
    );

    /*
     * Continue climbing.
     *
     * Starting at 4.5 means the aircraft
     * does not suddenly jump upwards at
     * the rotation -> climb transition.
     */
    y = THREE.MathUtils.lerp(
      2.5,
      40,
      t
    );

    pitch = THREE.MathUtils.lerp(
      -0.20,
      -0.45,
      t
    );
  }

  return (
    <group ref={aircraftRef}>
      <Aircraft
        position={[0, y, z]}
        rotation={[pitch, 0, 0]}
        scale={1}
      />
    </group>
  );
}

function Scene({
  progress,
}: {
  progress: number;
}) {
  return (
    <>

      {/* Camera */}

      <PerspectiveCamera
        makeDefault
        position={[0, 2.5, 28]}
        fov={45}
      />


      {/* Lighting */}

      <ambientLight intensity={0.0} />

      <directionalLight
        position={[-10, 5, 45]}
        intensity={0.5}
      />

      <directionalLight
        position={[10, 8, -20]}
        intensity={0.2}
      />


      <Environment preset="city" />


      {/* Background */}

      <fogExp2
        attach="fog"
        args={["#0E2841", 0.014]}
        />


      {/* Runway */}

      <Runway progress={progress} />


      {/* Aircraft */}

      <Suspense fallback={null}>

        <FlightAnimation
          progress={progress}
        />

      </Suspense>

    </>
  );
}



export default function TakeoffScene() {

  const sectionRef =
    useRef<HTMLDivElement>(null);

  const [progress, setProgress] =
    useState(0);


  useEffect(() => {

    function updateProgress() {

      if (!sectionRef.current) {
        return;
      }


      const rect =
        sectionRef.current.getBoundingClientRect();


      const viewportHeight =
        window.innerHeight;


      const totalDistance =
        rect.height -
        viewportHeight;


      const travelled =
        -rect.top;


      const value =
        totalDistance > 0
          ? travelled / totalDistance
          : 0;


      setProgress(
        THREE.MathUtils.clamp(
          value,
          0,
          1
        )
      );
    }


    window.addEventListener(
      "scroll",
      updateProgress,
      {
        passive: true,
      }
    );


    updateProgress();


    return () => {

      window.removeEventListener(
        "scroll",
        updateProgress
      );

    };

  }, []);


  return (

    <section
      ref={sectionRef}
      className="relative h-[500vh]"
    >

        <div
            className="
                sticky
                top-0
                z-10
                h-screen
                w-full
            "
            style={{
                opacity:
                1 -
                THREE.MathUtils.smoothstep(
                    progress,
                    0.82,
                    1
                ),
            }}
            >

        {/* Sky photograph */}
        <div
        className="
            absolute
            inset-0
            z-0
            bg-bottom
            bg-no-repeat
        "
        style={{
            backgroundImage: "url('/images/sky.jpg')",
            backgroundSize: `${150 - progress * 40}%`,
        }}
        />

        {/* Dark atmospheric overlay */}
        <div
            className="
            pointer-events-none
            absolute
            inset-0
            z-1
            bg-[#071B30]/45
            "
        />

        {/* Darker horizon / runway transition */}
        <div
            className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-2
            h-[45%]
            bg-linear-to-t
            from-[#080b0f]
            via-[#071B30]/30
            to-transparent
            "
        />

        {/* 3D scene */}
        <div className="absolute inset-0 z-10">
            <Canvas
            dpr={[1, 1.5]}
            shadows
            gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
            }}
            >
            <Scene progress={progress} />
            
            <EffectComposer>
            <Bloom
            intensity={1.4}
            luminanceThreshold={0.8}
            luminanceSmoothing={5.0}
            mipmapBlur
            />
            </EffectComposer>

            </Canvas>
        </div>


        {/* Scroll indicator */}
        <div
        className="
            pointer-events-none
            absolute
            inset-x-0
            top-[38%]
            flex
            justify-center
        "
        style={{
            opacity: 1 - THREE.MathUtils.smoothstep(
            progress,
            0.10,
            0.20
            ),
        }}
        >
        <p
            className="
            flex
            text-base
            uppercase
            tracking-[0.35em]
            text-white
            "
        >
            {"Scroll to Fly".split("").map((char, index) => {
            const centre = 6.5;
            const distance = index - centre;

            const spread =
                THREE.MathUtils.smoothstep(
                progress,
                0.10,
                0.20
                ) * 120;

            return (
                <span
                key={index}
                style={{
                    display: "inline-block",
                    transform: `translateX(${distance * spread}px)`,
                }}
                >
                {char === " " ? "\u00A0" : char}
                </span>
            );
            })}
        </p>
        </div>

      </div>

    </section>

  );
}