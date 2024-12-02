import React from "react";
import { Text, View, Pressable, Image, StyleSheet } from "react-native";

const MealItem = ({ title, imageUrl, affordability, complexity, duration }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>

        <View>
          <Text>{duration}m</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    alignItems: 200,
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
