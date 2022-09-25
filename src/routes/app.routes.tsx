import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { fonts } from "../styles/fonts";
import { colors } from "../styles/colors";
const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from "../pages/nome";
import { Likeit } from "../pages/likeit";
import { Profile } from "../pages/profile";
import { History } from "../pages/history";

import { Entypo } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarActiveTintColor: "#009C3B",
            tabBarInactiveTintColor: "#9E9E9E",
            tabBarIcon: () => {
              return <Entypo name="home" size={25} color="#009C3B"></Entypo>;
            },
          }}
        />
        <Screen
          name="Curtidos"
          component={Likeit}
          options={{
            tabBarActiveTintColor: "#009C3B",
            tabBarInactiveTintColor: "#9E9E9E",
            tabBarIcon: () => {
              return <AntDesign name="heart" size={24} color="#009C3B" />;
            },
          }}
        />
        <Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarActiveTintColor: "#009C3B",
            tabBarInactiveTintColor: "#9E9E9E",
            tabBarIcon: () => {
              return <Ionicons name="person" size={25} color="#009C3B"></Ionicons>;
            },
          }}
        />
        <Screen
          name="Histórico"
          component={History}
          options={{
            tabBarActiveTintColor: "#009C3B",
            tabBarInactiveTintColor: "#9E9E9E",
            tabBarIcon: () => {
              return <FontAwesome5 name="history" size={25} color="#009C3B"></FontAwesome5>;
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
