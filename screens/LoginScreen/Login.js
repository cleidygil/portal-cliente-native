import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StatusBar,
} from "react-native";
import { Button, Snackbar } from "react-native-paper";
import api from "../../server/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const [indicator, setIndicator] = React.useState("V");
  const [identification, setIdentification] = React.useState("");
  const [password, setPaswword] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const sendLogin = async () => {
    try {
      let concat = indicator.concat(identification);

      const body = {
        identification: concat,
        password: identification,
      };
      console.log("body", body);
      const response = await api.post("/portal/login/", body);
      if (response.data.token) {
        const token = response.data.token;
        await AsyncStorage.setItem("token", token);
        await AsyncStorage.setItem(
          "user",
          JSON.stringify(response.data.client)
        );
        setVisible(true);
        setMessage("Registro exitoso");
        navigation.dispatch(CommonActions.navigate("Inicio"));
      }
      return setVisible(false);;
    } catch (err) {
      console.log(err);
      setVisible(false);
      // setMessage("Registro exitoso");
      // navigation.dispatch(CommonActions.navigate("Home"));
      if (err.response.status == 400) {
        return setMessage(err.response.data.message);
      }
      return setMessage("Comunicarse con el administrador");
    }
  };
  const image = require("../../assets/img/fondo1.jpg");
  return (
    <>
      <StatusBar style="ligth" />
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.card}>
            <Text style={styles.titulo}>Inicio de sesion</Text>
            <TextInput
              style={styles.input}
              onChangeText={setIdentification}
              value={identification}
              placeholder="Ingrese su cedula "
            />
            <TextInput
              style={styles.input}
              onChangeText={setPaswword}
              value={password}
              secureTextEntry
              enterKeyHint='enter, send'
              placeholder="Ingrese la contraseña "
            />
            <TouchableOpacity onPress={sendLogin}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Ingresar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: "X",
            onPress: () => {
              onToggleSnackBar;
            },
          }}
        >
          {message}
        </Snackbar>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    color: "white",
    justifyContent: "center",
    backgroundColor: "#000000c0",
    padding: 20,
    margin: 10,
    rowGap: 30,
  },
  button: {
    // marginBottom: 30,
    width: "100%",
    alignItems: "center",
    backgroundColor: "rgb(185 28 28)",
    borderRadius: 50,
  },
  buttonText: {
    textAlign: "center",
    padding: 13,
    color: "white",
    fontWeight: "bold",
  },
  titulo: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 50,
    width: "100%",
    color: "white",
    backgroundColor: "rgb(120 113 108)",
  },
});
export default Login;
