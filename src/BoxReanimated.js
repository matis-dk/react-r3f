import Animated, {
  useSharedValue,
  withSequence,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Container } from "./Container";
import { useEffect } from "react";

export function BoxReanimated(props) {
  const offset = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  useEffect(() => {
    const config = { duration: 500 };
    offset.value = withRepeat(
      withSequence(withTiming(0, config), withTiming(100, config)),
      -1,
      true
    );
  }, []);

  return (
    <Container title="reanimated">
      <Animated.View
        style={[
          { width: 100, height: 80, backgroundColor: "black" },
          animatedStyles,
        ]}
      />
    </Container>
  );
}
