import React from "react";

import { View, Text, StyleSheet } from "react-native";
import fonts from "../styles/fonts";
export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>O que você quer jogar hoje?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
  },
  title: {
    fontFamily: fonts.heading,
  },
});
