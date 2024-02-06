import React, { Fragment, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Home from "../screens/HomeScreen/Home";
import Login from "../screens/LoginScreen/Login";
import Tabs from "./tab-navigation";

import { Avatar, IconButton, MD3Colors } from "react-native-paper";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

const HomeStackNavigator = createNativeStackNavigator();

export default function HomeStackScreen() {
  const navigation = useNavigation();
  const Logout = async () => {
    await AsyncStorage.clear();
    navigation.dispatch(CommonActions.navigate("Login"));
  };

  return (
    <HomeStackNavigator.Navigator initialRouteName="">
      <HomeStackNavigator.Screen
        name="Inicio"
        component={Tabs}
        options={{
          title:"",
          headerRight: (props) => (
            <IconButton
              {...props}
              icon="logout"
              iconColor={MD3Colors.error50}
              size={20}
              onPress={Logout}
            />
          ),
          headerLeft: (props) => (
            <Avatar.Image
              {...props}
              style={styles.avatar}
              size={24}
              source={require("../assets/img/g1.png")}
            />
          ),
          
        }}
      />
      <HomeStackNavigator.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </HomeStackNavigator.Navigator>
  );
}
const styles = StyleSheet.create({
  avatar: {
    backgroundColor: "#fff",
    margin: 4,
  },
});
