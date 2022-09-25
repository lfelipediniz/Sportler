import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from "../pages/home";
import { Likeit } from "../pages/likeit";
import { Profile } from "../pages/profile";
import { History } from "../pages/history";

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="Likeit" component={Likeit} />
        <Screen name="Profile" component={Profile} />
        <Screen name="History" component={History} />
      </Navigator>
    </NavigationContainer>
  );
}
