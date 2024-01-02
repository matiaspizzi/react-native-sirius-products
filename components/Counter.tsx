import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Styles from "../utils/styles";

interface PropTypes {
  handleSetQty: (quantity: number) => void;
}

const Counter = ({ handleSetQty }: PropTypes) => {

  const [qty, setQty] = useState<number>(1);

  const handleSum = () => {
    setQty(qty + 1);
    handleSetQty(qty  + 1);
  };

  const handleRest = () => {
    setQty(qty - 1);
    handleSetQty(qty - 1);
  };

  return (
    <View style={styles.counter}>
      <Pressable onPress={handleRest} style={styles.button}>
        <Text style={Styles.text1}> - </Text>
      </Pressable>
      <Text>{qty}</Text>
      <Pressable onPress={handleSum} style={styles.button}>
        <Text style={Styles.text1}> + </Text>
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  counter: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "white",
    height: 40,
    width: "auto",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    borderRadius: 5,
  },
  button: {
    alaignItems: "center",
    justifyContent: "center",
    padding: 8,
    minWidth: 40,
  },
});
