import React, { Fragment, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MD2Colors } from "react-native-paper";

import Setting from "../screens/SettingsScreen/Setting";
import Tickets from "../screens/TicketsScreen/Tickets";
import HomeScreenNavigation from "./home-navigation";


const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        tabBarActiveTintColor: MD2Colors.red600,
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreenNavigation}
        options={{
          tabBarLabel: "Contratos",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="store" size={size} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Mis Tickets"
        component={Tickets}
        options={{
          tabBarLabel: "Tickets",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="ticket-confirmation"
              size={size}
              color={color}
            />
          ),
         
        }}
      />
      <Tab.Screen
        name="Ajustes"
        component={Setting}
        options={{
          tabBarLabel: "Ajustes",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" size={size} color={color} />
          ),
          
        }}
      />
    </Tab.Navigator>
  );
}

