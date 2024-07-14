import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Hotstar from "./component/Hotstar";
import Login from "./component/Login";
import { useState } from "react";
import Signup from "./component/Signup";

export default function App() {
  const [display, setDisplay] = useState("signup");

  return (
    <View style={styles.container}>
      {display === "login" ? (
        <Login setDisplay={setDisplay} />
      ) : display === "signup" ? (
        <Signup setDisplay={setDisplay} />
      ) : (
        <Hotstar setDisplay={setDisplay} />
      )}
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
});
