import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeScreen from "./assets/components/pages/Home";
import ProductForm from "./assets/components/pages/ProductForm";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#fafafa",
            marginTop: 35,
          },
        }}
      >
        <Tab.Screen name="Estoque" component={HomeScreen} />
        <Tab.Screen name="Novo" component={ProductForm} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
