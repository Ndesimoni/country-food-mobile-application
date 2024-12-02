import React from "react";
import { CATEGORIES } from "../data/dummy-data";

import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoryScreen = ({ navigation }) => {
  const renderCategoryItems = (itemData) => {
    function handelPress() {
      navigation.navigate("MealsOverView", { categoryId: itemData.item.id });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={handelPress}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItems}
      numColumns={2}
    />
  );
};

export default CategoryScreen;
