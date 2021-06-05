import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { openBrowserAsync } from "expo-web-browser";

export default function App() {
  const [counter, setCounter] = useState(0);

  function onPress() {
    setCounter(counter + 1);
    console.warn("Yay, you pushed the button", counter + 1, "times!🎉");
    openBrowserAsync("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.fancyText}>Welcome to your custom DnD App!✨</Text>
      <Button title="Continue" onPress={onPress} />
      <StatusBar style="auto" />
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
  fancyText: {
    backgroundColor: "#ffa500",
    borderRadius: 10,
    overflow: "hidden",
    padding: 40,
  },
});
