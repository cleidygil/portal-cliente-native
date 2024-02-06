import Navigation from "./navigation/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DarkTheme, NavigationContainer, DefaultTheme } from "@react-navigation/native";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(218, 0, 0)',
  },
};
export default function App() {
  return (
    <SafeAreaProvider theme={MyTheme} >
      <Navigation  />
    </SafeAreaProvider>
  );
}
