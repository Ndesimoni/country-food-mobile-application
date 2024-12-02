import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ButtonComponent = ({ name, color, size, onPress }) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.press}
      >
        <MaterialCommunityIcons name={name} size={size} color={color} />
      </Pressable>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  press: {
    opacity: 0.4,
  },
});
