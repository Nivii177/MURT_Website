import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

const YELLOW   = new THREE.MeshStandardMaterial({ color: "#facc15", metalness: 0.4, roughness: 0.35 });
const NAVY     = new THREE.MeshStandardMaterial({ color: "#1a2744", metalness: 0.5, roughness: 0.3 });
const MAROON   = new THREE.MeshStandardMaterial({ color: "#7A003C", metalness: 0.4, roughness: 0.4 });

function getMaterial(name = "") {
  const n = name.toLowerCase();
  if (n.includes("thruster") || n.includes("motor") || n.includes("prop"))  return YELLOW;
  if (n.includes("enclosure") || n.includes("housing") || n.includes("tube") || n.includes("cylinder") || n.includes("body")) return MAROON;
  if (n.includes("frame") || n.includes("rail") || n.includes("bar") || n.includes("strut") || n.includes("plate") || n.includes("bracket")) return NAVY;
  return null;
}

function Model() {
  const { scene } = useGLTF("/rov_3Dprint.gltf");
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    // Center at world origin
    const box = new THREE.Box3().setFromObject(ref.current);
    const center = new THREE.Vector3();
    box.getCenter(center);
    ref.current.position.sub(center);

    // Log all mesh names so you can verify targeting
    const parentColourMap = new Map();
    let colourIndex = 0;
    const fallback = [YELLOW, NAVY, MAROON];

    ref.current.traverse((child) => {
      if (child.isMesh) {
        console.log("Mesh:", child.name, "| Parent:", child.parent?.name);

        // Try to match by mesh name first, then parent name
        const mat = getMaterial(child.name) || getMaterial(child.parent?.name || "");

        if (mat) {
          child.material = mat;
        } else {
          // Group unmatched meshes by parent so connected parts share a colour
          const parentId = child.parent ? child.parent.uuid : "root";
          if (!parentColourMap.has(parentId)) {
            parentColourMap.set(parentId, fallback[colourIndex % fallback.length]);
            colourIndex++;
          }
          child.material = parentColourMap.get(parentId);
        }

        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive ref={ref} object={scene} scale={2.2} rotation={[0, Math.PI, 0]} />;
}

export default function ROVModel() {
  return (
    <div className="rov-model-wrapper">
      <Canvas camera={{ position: [-2, 3, 2.5], fov: 80 }} gl={{ alpha: true }} style={{ background: "transparent" }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <directionalLight position={[-5, -5, -5]} intensity={0.4} />
          <Environment preset="city" />
          <Model />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            target={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
