import React from "react";
import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View style={styles.subTitleContainer} key={dataPoint}>
      <Text style={styles.text}>{dataPoint}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  subTitleContainer: {
    borderBottomColor: "#e8e7e5f6",
    padding: 6,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  text: {
    color: "#100e0e",
    text: "center",
    paddingHorizontal: 12,
  },
});
