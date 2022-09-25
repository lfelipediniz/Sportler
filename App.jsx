import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppRoutes } from "./src/routes/app.routes";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Ubuntu_700Bold,
  Ubuntu_500Medium,
} from "@expo-google-fonts/ubuntu";

import { Roboto_400Regular } from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Ubuntu_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <AppRoutes />
    </View>
  );
}
