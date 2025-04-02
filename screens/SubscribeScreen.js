import * as React from "react";
import { useState } from "react";
import { validateEmail } from "../utils";

import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";

const SubscribeScreen = () => {
  // Add subscribe screen code here

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  console.log(email);
  console.log(emailValid);

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    setEmailValid(validateEmail(newEmail));
  };

  const buttonAlert = () => {
    alert("Thanks for subscribing, stay tuned!");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo-grey.png")}
        style={{
          height: 120,
          width: 120,
          resizeMode: "contain",
          marginBottom: 20,
          marginTop: 20,
        }}
      />

      <Text style={styles.text}>
        Subscribe to our newsletters for our latest delicious recipies!
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder="First name"
        require
        onChangeText={handleEmailChange}
        value={email}
      />

      <Pressable
        style={emailValid ? styles.button1 : styles.button1Disabled}
        disabled={!emailValid}
        onPress={() => {
          buttonAlert();
          setEmail("");
          setEmailValid(false);
        }}
      >
        <Text style={{ color: "white" }}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },

  button1: {
    padding: 12,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#495e57",
    maxHeight: 50,
    width: "100%",
  },
  button1Disabled: {
    padding: 12,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    maxHeight: 50,
    width: "100%",
  },

  input: {
    borderWidth: 1,
    borderColor: "#495e57",
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
    height: 40,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default SubscribeScreen;
