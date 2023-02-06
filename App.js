import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeScreen from "./assets/pages/Home";
import NewProduct from "./assets/pages/NewProduct";

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
        <Tab.Screen name="Novo" component={NewProduct} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
