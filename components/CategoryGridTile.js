import React from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
  // function handelPress() {
  //   navigation.navigate("MealsOverView");
  // }

  return (
    <View style={styles.main}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.opacity]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { with: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" && "hidden",
  },

  button: {
    flex: 1,
  },

  opacity: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
