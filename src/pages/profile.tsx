import React from "react";

import { View, Text, StyleSheet } from "react-native";
import fonts from "../styles/fonts";

export function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>opaaaa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  title: {
    fontFamily: fonts.heading,
  },
});
