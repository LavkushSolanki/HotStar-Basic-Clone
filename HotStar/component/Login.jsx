import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  Pressable,
  Image,
  Alert,
} from "react-native";

export default function Login({ setDisplay }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../assets/bg3.jpg")}
    >
      <View style={styles.container}>
        {/* heading of my page */}
        <Image
          style={{
            width: "90%",
            height: 80,
            alignSelf: "center",
            marginTop: 100,
          }}
          source={{
            uri: "https://asset.brandfetch.io/idh5Jct7tV/idmm5GjKi5.png",
          }}
        />
        <Text style={styles.textStyle}> Welcome's You</Text>
      </View>
      <View style={styles.loginContainer}>
        {/* LOGIN FIELD */}
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={styles.input}
        />
        <Pressable
          style={styles.buttonStyle}
          // validation of each field

          onPress={() => {
            if (email.length > 0 && password.length > 0) {
              for (let index = 0; index < email.length; index++) {
                if (email[index] === "@") {
                  setDisplay("home");
                }
              }
            } else {
              Alert.alert("Email and Password incorrect");
              setEmail("");
              setPassword("");
            }
          }}
          title="Login"
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={{ fontSize: 15, fontWeight: "900", color: "#fff" }}>
            Login
          </Text>
        </Pressable>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <Text style={{ color: "cyan", fontSize: 30, margin: 9 }}>
            New User:
          </Text>
          <Pressable
            style={styles.buttonStyleSignup}
            onPress={() => {
              setDisplay("signup");
              console.log("Signup");
            }}
            title="Login"
            accessibilityLabel="Learn more about this purple button"
          >
            <Text style={{ fontSize: 15, fontWeight: "900", color: "#fff" }}>
              SignUp
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  header: {
    color: "white",
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
  },
  textStyle: {
    color: "cyan",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 50,
  },
  input: {
    marginTop: 15,
    color: "black",
    backgroundColor: "#96e5f5",
    padding: 10,
    width: "80%",
    color: "#fff",
    borderRadius: 20,
  },
  loginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -250,
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    marginTop: 30,
    backgroundColor: "#16bde7",
  },
  buttonStyleSignup: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    margin: "auto",
    backgroundColor: "#16bde7",
  },
});
