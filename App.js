import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsType from "./components/MealsOverView";

const Stack = createNativeStackNavigator();

const { Screen, Navigator } = Stack;

export default function App() {
  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
        <Navigator>
          <Screen name="MealsCategory" component={CategoryScreen} />
          <Screen name="MealsOverView" component={MealsType} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
