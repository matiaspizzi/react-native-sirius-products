import { StyleSheet, ScrollView, View, Text } from "react-native";
import { useCartContext } from "../hooks/useCartContext";
import React from "react";
import CartList from "../components/CartList";
import Styles from "../utils/styles";

const CartScreen = () => {
  
  const { cart } = useCartContext();

  return (
    <ScrollView>
      {cart.length === 0 && (
        <View style={Styles.container}>
          <Text style={styles.text}>The cart is empty, add some products!</Text>
        </View>
      )}
      {cart.length > 0 && (
        <CartList cartItems={cart} />
      )}
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    fontSize: 16,
    backgroundColor: "white",
    padding: 14,
    borderRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});
