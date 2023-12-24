import { Canvas, useFrame } from "@react-three/fiber/native";
import { Container } from "./Container";
import { useRef } from "react";

export function BoxR3F() {
  return (
    <Container title="r3f">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Mesh />
      </Canvas>
    </Container>
  );
}

function Mesh() {
  const myMesh = useRef();

  useFrame((res) => {
    myMesh.current.rotation.x = res.clock.getElapsedTime();
  });

  return (
    <mesh ref={myMesh} scale={2}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}
