import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
const Payment = () => {
//   const {
//     params: { contract },
//   } = useRoute();
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        Payment
      </Text>
    </View>
  );
};

export default Payment;
