import React, { Fragment, useEffect } from "react";
import {MD3LightTheme  as DarkTheme, NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(218, 0, 0)',
  },
};
import HomeStackScreen from "./main";

export default function Navigation() {
  const [isLogin, setIsLogin] = React.useState(false);

  const verify = async () => {
    const valor = await AsyncStorage.getItem("token");
    setIsLogin(valor != null ? true : false);
  };
  React.useEffect(() => {
    verify();
    console.log(isLogin);
  }, [isLogin]);
  return (
    <Fragment>
      <NavigationContainer >
        <HomeStackScreen />
      </NavigationContainer>
    </Fragment>
  );
}
