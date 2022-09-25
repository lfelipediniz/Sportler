import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import colors from "../styles/colors";
import { SimpleLineIcons } from "@expo/vector-icons";

import fonts from "../styles/fonts";

export function SearchBar() {
  return (
    <TouchableOpacity style={styles.container}>
      <SimpleLineIcons
        style={styles.lupa}
        name="magnifier"
        size={24}
        color="black"
      />
      <Text style={styles.text}>Pesquise por...</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: "100%",
    height: 50,
    backgroundColor: colors.bgText,
    justifyContent: "space-between",
    marginVertical: 25,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.textBg,
    fontWeight: "italic",
    padding: 13,
  },
  lupa: {
    position: "absolute",
    alignSelf: "flex-end",
    padding: 12,
  },
});
