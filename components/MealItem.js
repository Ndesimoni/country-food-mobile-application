import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetails from "./MealDetails";

const MealItem = ({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
}) => {
  const navigation = useNavigation();

  function mealDetails() {
    navigation.navigate("MealDetails", { id: id });
  }

  return (
    <View style={styles.mealItems}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.buttonPress}
        onPress={mealDetails}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>

          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
          {/* <View style={styles.details}>
            <Text>{duration}m</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
          </View> */}
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItems: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { with: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" && "hidden",
  },
  buttonPress: {
    opacity: 0.2,
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 8,
  },

  image: {
    width: "100%",
    height: 200,
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
    gap: 10,
  },
});
