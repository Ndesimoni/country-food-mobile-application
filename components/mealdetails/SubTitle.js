import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SubTitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#7a2d03d7",
    fontFamily: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subTitleContainer: {
    borderBottomColor: "#8c8c8c75",
    padding: 6,
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
  },
});
