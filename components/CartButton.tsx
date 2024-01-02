import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { Product } from "../utils/types";
import { useCartContext } from "../hooks/useCartContext";
import { FontAwesome5 } from "@expo/vector-icons";
import { useToast } from "react-native-toast-notifications";
import React from "react";
import Constants from "../utils/constants";
import Counter from "./Counter";

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

  const handleSetQty = (qty: number) => {
    setQty(qty);
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handleButton} style={styles.buttonAdd}>
        <FontAwesome5 name="cart-plus" size={18} color="black" />
      </Pressable>
      <Counter handleSetQty={handleSetQty}/>
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
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
    shadowOpacity: 0.3,
    shadowRadius: 3.05,
    elevation: 8,
  },
});
