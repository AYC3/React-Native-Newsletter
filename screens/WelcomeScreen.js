import * as React from "react";
import { View, Text, Pressable, Button, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../assets/little-lemon-logo.png")}
        style={{
          height: 200,
          width: 200,
          resizeMode: "contain",
          marginBottom: 50,
          marginTop: 180,
        }}
      />

      <Text style={styles.text}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      {/* <Button title="Newsletter" /> */}
      <Pressable
        style={styles.button1}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={{ color: "white" }}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  button1: {
    padding: 12,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#495e57",
    paddingLeft: 150,
    paddingRight: 150,
    // paddingHorizontal: 150,
  },

  text: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 30,
    textAlign: "center",
    marginBottom: 100,
    paddingLeft: 50,
    paddingRight: 50,
  },
});

export default WelcomeScreen;
