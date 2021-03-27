import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import Header from "./components/Header";

import dict from "./database";

export default function App() {
  const [text, setText] = useState("");

  const [displayText, setDisplayText] = useState("");

  const [definition, setDefinition] = useState("");

  const [type, setType] = useState("");

  const getWord = async (word) => {
    var search = word.toLowerCase();
    if (dict[search]) {
      //console.log("Exists");
      setDefinition(dict[search].definition);
      setType(dict[search].lexicalCategory);
    } else {
      setDefinition("Not Found");
      setType("Not Found");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <StatusBar barStyle="light-content" />
      <Header />
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            placeholder="Search words and definitions.."
            style={styles.input}
            placeholderTextColor="grey"
            onChangeText={(val) => {
              setText(val);
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setDisplayText(text);
          getWord(text);
          Keyboard.dismiss();
        }}
      >
        <Text style={{ color: "whitesmoke", fontSize: 30 }}>Go</Text>
      </TouchableOpacity>
      <ScrollView
        style={{
          backgroundColor: "#111",
          width: "85%",
          alignSelf: "center",
          marginTop: 40,
          borderRadius: 30,
          marginBottom: 40,
        }}
      >
        <View style={styles.container}>
          <Text style={styles.word}>Word: {displayText}</Text>
          <Text style={styles.definition}>Definition: {definition}</Text>
          <Text style={styles.type}>Word Type: {type}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "orange",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 22,
    marginTop: 15,
  },
  input: {
    color: "white",
    backgroundColor: "#151515",
    fontSize: 20,
    paddingVertical: 20,
    width: "80%",
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  container: {
    alignItems: "center",
    marginTop: 15,
  },
  word: {
    color: "white",
    fontSize: 30,
    margin: 30,
  },
  definition: {
    color: "white",
    fontSize: 30,
    margin: 30,
    textAlign: "center",
  },
  type: {
    color: "white",
    fontSize: 30,
    margin: 30,
  },
});

//https://rupinwhitehatjr.github.io/dictionary/%22+searchKeyword+%22.json
