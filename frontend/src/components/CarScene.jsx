import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, PresentationControls, Float } from "@react-three/drei";
import * as THREE from "three";

const CAR_URL = "https://threejs.org/examples/models/gltf/ferrari.glb";
useGLTF.preload(CAR_URL);

function Car() {
  const ref = useRef();
  const { scene } = useGLTF(CAR_URL);

  React.useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
        const mat = obj.material;
        if (mat && mat.name) {
          if (/body/i.test(mat.name)) {
            mat.color = new THREE.Color("#c81020");
            mat.metalness = 1;
            mat.roughness = 0.28;
            mat.envMapIntensity = 2.2;
          }
          if (/glass/i.test(mat.name)) {
            mat.transparent = true;
            mat.opacity = 0.4;
            mat.roughness = 0.05;
          }
          if (/rim|chrome/i.test(mat.name)) {
            mat.metalness = 1;
            mat.roughness = 0.15;
          }
        }
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.18;
  });

  return (
    <group ref={ref} position={[0, -0.45, 0]}>
      <primitive object={scene} scale={1.4} />
    </group>
  );
}

export default function CarScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [4.5, 1.6, 5.5], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.25} />
      <spotLight position={[5, 8, 5]} intensity={1.6} angle={0.4} penumbra={0.5} color={"#ef4444"} castShadow />
      <spotLight position={[-6, 5, -3]} intensity={1.3} angle={0.5} penumbra={0.7} color={"#3b82f6"} />
      <pointLight position={[0, 4, 0]} intensity={0.5} color={"#ffffff"} />

      <Suspense fallback={null}>
        <PresentationControls
          global
          rotation={[0, -0.3, 0]}
          polar={[-0.2, 0.3]}
          azimuth={[-Math.PI, Math.PI]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 200 }}
        >
          <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
            <Car />
          </Float>
        </PresentationControls>
        <Environment preset="night" />
      </Suspense>

      <ContactShadows
        position={[0, -0.45, 0]}
        opacity={0.55}
        scale={10}
        blur={2.4}
        far={4}
        color={"#000000"}
      />
    </Canvas>
  );
}
