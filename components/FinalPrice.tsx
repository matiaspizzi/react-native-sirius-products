import { View, Text, StyleSheet } from "react-native";
import Styles from "../utils/styles";
import React from "react";

interface PropTypes {
  price: string;
}

const FinalPrice = ({price}: PropTypes) => {
  return(
    <View style={styles.container}>
      <Text>Total price: </Text>
      <Text style={Styles.text1}>$ {price}</Text>
    </View>
  )
};

export default FinalPrice;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
    height: 40,
    width: 300,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});