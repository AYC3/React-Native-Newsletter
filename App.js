import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SubscribeScreen from "./screens/SubscribeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { StyleSheet } from "react-native";
// App.js is already setup by wrapping NavigationContainer around Root Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Subscribe"
          component={SubscribeScreen}
          options={{ title: "Subscribe" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <SubscribeScreen />
  );
}
