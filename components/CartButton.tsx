import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { Product } from "../utils/types";
import { useCartContext } from "../hooks/useCartContext";
import { FontAwesome5 } from "@expo/vector-icons";
import { useToast } from "react-native-toast-notifications";
import React from "react";
import Constants from "../utils/constants";
import Styles from "../utils/styles";

interface PropTypes {
  product: Product;
}

const CartButton = ({ product }: PropTypes) => {
  const [quantity, setQty] = useState<number>(1);

  const toast = useToast();

  const { addToCart } = useCartContext();

  const handleButton = () => {
    addToCart(product, quantity);
    toast.show("Product added to cart", {
      type: "success",
      placement: "bottom",
      duration: 2000,
    });
  };

  const handleSum = () => {
    if (quantity < 9) setQty(quantity + 1);
  };

  const handleRest = () => {
    if (quantity > 1) setQty(quantity - 1);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleButton} style={styles.buttonAdd}>
        <FontAwesome5 name="cart-plus" size={18} color="black" />
      </Pressable>
      <View style={styles.counter}>
        <Pressable onPress={handleRest} style={styles.button}>
          <Text style={Styles.text1}> - </Text>
        </Pressable>
        <Text>{quantity}</Text>
        <Pressable onPress={handleSum} style={styles.button}>
          <Text style={Styles.text1}> + </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  counter: {
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
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    gap: 20,
  },
  button: {
    flexDirection: "row",
    alaignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 5,
    minWidth: 40,
  },
  buttonAdd: {
    padding: 8,
    borderRadius: 100,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: Constants.colors.lightBlue,
    borderWidth: 1,
    borderColor: "white",
    shadowOpacity: 0.3,
    shadowRadius: 3.05,
    elevation: 8,
  },
});
