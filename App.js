import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import View from "./screen/view";
import Add from "./screen/add";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ViewTodo">
        <Stack.Screen
          name="ViewTodo"
          component={View}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="AddTodo"
          component={Add}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
