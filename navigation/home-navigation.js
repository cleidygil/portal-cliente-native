import React, { Fragment, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/HomeScreen/Home";
import Payment from "../screens/PaymentScreen/Payment";

const HomeStackNavigator = createNativeStackNavigator();

export default function HomeScreenNavigation() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="Inicio">
      <HomeStackNavigator.Screen
        name="Inicio"
        component={Home}
        options={{
          headerShown: false
        }}
        
      />
      <HomeStackNavigator.Screen
        name="Facturas"
        component={Payment}
        options={{ title: "Mis Facturas" }}
      />
    </HomeStackNavigator.Navigator>
  );
}
