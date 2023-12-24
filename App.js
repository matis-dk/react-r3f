import { Button, StyleSheet, Text, View } from "react-native";
import { BoxReanimated } from "./src/BoxReanimated";
import { BoxSkia } from "./src/BoxSkia";
import { BoxR3F } from "./src/BoxR3F";

export default function App() {
  return (
    <View style={styles.container}>
      <BoxReanimated />
      <BoxSkia />
      <BoxR3F />
      <Button
        onPress={() => {
          // block main thread for 2 secs
          const start = Date.now();
          while (Date.now() - start < 2000) {}
        }}
        title="Block thread for 2secs"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
