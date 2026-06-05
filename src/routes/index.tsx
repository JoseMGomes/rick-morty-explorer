import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Details } from "../screens/Details";
import { Home } from "../screens/Home";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Rick and Morty Explorer" }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ title: "Detalhes" }}
      />
    </Stack.Navigator>
  );
}
