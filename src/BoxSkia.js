import React from "react";
import { Canvas, Circle, Group, useClock } from "@shopify/react-native-skia";
import { Container } from "./Container";
import { Button } from "react-native";
import { useDerivedValue } from "react-native-reanimated";

export function BoxSkia() {
  const width = 128;
  const height = 128;
  const r = width * 0.33;

  const t = useClock();

  const transform = useDerivedValue(() => {
    const x = ((Math.sin(t.value / 250) + 1) / 2) * 150;
    return [{ translateX: x }];
  });

  return (
    <Container title="skia">
      <Canvas style={{ width: 256, height: 256 }}>
        <Group blendMode="multiply">
          <Circle cx={r} cy={r} r={r} color="cyan" transform={transform} />
          <Circle cx={width / 2} cy={height / 2} r={r} color="magenta" />
          <Circle cx={width} cy={height / 2} r={r} color="yellow" />
        </Group>
      </Canvas>
    </Container>
  );
}
