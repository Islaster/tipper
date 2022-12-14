import { Button, StyleSheet, Text, View } from "react-native";

export function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="History"
        onPress={() => navigation.navigate("History", { name: "Tip History" })}
      />
      <Button
        title="ADD TIPS"
        onPress={() => navigation.navigate("Add Tips", { name: "Add tips" })}
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
  },
});
