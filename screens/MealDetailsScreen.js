import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import List from "../components/mealdetails/List";
import SubTitle from "../components/mealdetails/SubTitle";
import ButtonComponent from "../components/ButtonComponent";

const MealDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const meals = MEALS.find((meal) => {
    return meal.id === id;
  });
  function headerPressButton() {
    console.log("header press button");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <ButtonComponent
            onPress={headerPressButton}
            name="qrcode-scan"
            color="black"
            size={24}
          />
        );
        // return <Button title="tap me" onPress={headerPressButton} />;
      },
    });
  }, []);

  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: meals.imageUrl }} style={styles.image} />
      <Text style={styles.title}> {meals.title} </Text>

      <View>
        <MealDetails
          duration={meals.duration}
          affordability={meals.affordability}
          complexity={meals.complexity}
        />
      </View>

      <SubTitle>ingredient</SubTitle>
      <List data={meals.ingredients} />

      <SubTitle>steps</SubTitle>
      <List data={meals.steps} />
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  root: {
    paddingBottom: 35,
  },
  image: {
    width: "100%",
    height: 350,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#7a2d03d7",
  },
});
