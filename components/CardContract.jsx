import React from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Text,
  IconButton,
  MD2Colors,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "react-native-paper";
import { CommonActions, useNavigation } from "@react-navigation/native";

const CardContract = ({ value }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [contrato, setContrato] = React.useState(value);

  return (
    <Card style={styles.card}>
      <Card.Title
        title={contrato.client_type_name}
        subtitle={contrato.id}
        left={(props) => (
          <Avatar.Image
            {...props}
            style={styles.avatar}
            size={50}
            source={require("../assets/img/g1.png")}
          />
        )}
        right={(props) => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
      <Card.Content>
        <Text variant="bodyMedium"> {contrato.address_tax}</Text>
      </Card.Content>
      <Card.Actions>
        <Button
          icon="cash-check"
          mode="text"
          textColor={MD2Colors.red700}
          onPress={() => navigation.navigate("Facturas")}
        >
          Facturas
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  color_button: {
    color: "rgb(185 28 28)",
  },
  card: {
    margin: 10,
    flex: 1,
  },
  avatar: {
    backgroundColor: "#fff",
  },
});

export default CardContract;
