import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView,
} from "react-native";

function header() {
  return (
    <SafeAreaView style={styles.heading}>
      <Text style={styles.title}>Pocket Dictionary</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingView: {
    alignItems: "center",
    backgroundColor: "black",
    height: Dimensions.get("screen").height * 0.17,
  },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  heading: {
    justifyContent: "center",
    height: Dimensions.get("screen").height * 0.17,
    alignItems: "center",
    backgroundColor: "#111",
    borderRadius: Dimensions.get("screen").width * 0.1,
    width: "90%",
    marginTop: "12%",
    alignSelf: "center",
  },
});

export default header;
