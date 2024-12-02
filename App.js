import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsType from "./components/MealsOverView";
import MealDetailScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

const { Screen, Navigator } = Stack;

export default function App() {
  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#ebfbffcc" },
            contentStyle: { backgroundColor: "#edfdff" },
          }}
        >
          <Screen
            name="MealsCategory"
            component={CategoryScreen}
            options={{
              title: "All Category",
            }}
          />

          <Screen
            name="MealsOverView"
            component={MealsType}
            // minor way of setting options title dynamically
            // options={({ route, navigation }) => {
            //   const title = route.params.categoryId;
            //   return {
            //     title: title,
            //   };
            // }}
          />

          <Screen
            name="MealDetails"
            component={MealDetailScreen}

            // options={{
            //   headerRight: () => {
            //     return <Button title="tap me" />;
            //   },
            // }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
