import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

function Input() {
  return (
    <View>
      <TextInput
        placeholder="Search words and definitions.."
        style={styles.input}
        placeholderTextColor="grey"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "white",
    backgroundColor: "#151515",
    fontSize: 20,
    paddingVertical: 20,
    width: "80%",
    borderRadius: 25,
    paddingHorizontal: 20,
  },
});

export default Input;
