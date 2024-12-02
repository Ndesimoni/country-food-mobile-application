import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "./MealItem";

const MealsOverView = ({ route, navigation }) => {
  const { categoryId } = route.params;

  useLayoutEffect(() => {
    const itemsTitle = CATEGORIES.find(
      (title) => title.id === categoryId
    ).title;
    navigation.setOptions({ title: itemsTitle });
  }, [navigation, categoryId]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  function renderMealsItem(mealItem) {
    const item = mealItem.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <FlatList
      data={displayedMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMealsItem}
    />
  );
};

export default MealsOverView;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
