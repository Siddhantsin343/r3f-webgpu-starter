import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";



export default function App() {
  return (
  <Canvas
  gl={async (props) => {
    const { WebGPURenderer } = await import("three/webgpu");

    const renderer = new WebGPURenderer(props);
    await renderer.init();

    return renderer;
  }}
  camera={{
    position: [0, 0, 6],
    fov: 50,
  }}
>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <mesh>
        <boxGeometry />
      <OrbitControls/>
        <meshBasicMaterial color={'red'}/>
      </mesh>
    </Canvas>
  );
}