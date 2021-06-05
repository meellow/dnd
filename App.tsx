import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

function Attribute(props: { name: string; value: number }) {
  let mod = Math.floor(props.value / 2 - 5);
  let sign = "";
  if (mod >= 0) {
    sign = "+";
  }
  return (
    <View style={styles.attrBox}>
      <Text style={styles.attrName}>{props.name}</Text>
      <Text style={styles.attrMod}>
        {sign}
        {mod}
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Attribute name="Stärke" value={14} />
      <Attribute name="Geschicklichkeit" value={18} />
      <Attribute name="Konstitution" value={16 + 2} />
      <Attribute name="Intelligenz" value={9} />
      <Attribute name="Weisheit" value={11} />
      <Attribute name="Charisma" value={14} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  attrBox: {
    width: 120,
    height: 120,
    backgroundColor: "#0a0",
    alignItems: "center",
    justifyContent: "center",
  },
  attrName: {
    color: "#fff",
  },
  attrMod: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});
