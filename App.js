import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { AddTipScreen } from "./Screens/AddTipScreen";
import { HomeScreen } from "./Screens/HomeScreen";
import { HistoryScreen } from "./Screens/HistoryScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{ title: "Tip History" }}
        />
        <Stack.Screen
          name="Add Tips"
          component={AddTipScreen}
          options={{ title: "Add Tips" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
