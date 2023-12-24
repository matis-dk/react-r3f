import { View, Text } from "react-native";

export function Container(props) {
  return (
    <View>
      <Text>{props.title || ""}</Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          height: 200,
          width: 200,
        }}
      >
        {props.children}
      </View>
    </View>
  );
}
