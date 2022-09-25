import React from "react";

import { View, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { SearchBar } from "../components/SearchBar";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 25 }}>
        <Text style={styles.title}>O que você{"\n"}quer jogar hoje?</Text>
        <SearchBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 34,
    paddingTop: 25,
  },
});
