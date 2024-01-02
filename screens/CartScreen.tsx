import { StyleSheet, ScrollView, View, Text } from "react-native";
import { useCartContext } from "../hooks/useCartContext";
import ProductCartCard from "../components/ProductCartCard";
import Styles from "../utils/styles";
import React from "react";

const CartScreen = () => {
  
  const { cart } = useCartContext();

  const totalPrice = cart?.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  return (
    <ScrollView>
      {cart.length === 0 && (
        <View style={styles.container}>
          <Text style={styles.text}>The cart is empty, add some products!</Text>
        </View>
      )}
      {cart.length > 0 && (
        <View style={styles.view}>
          {cart?.map((item) => (
            <ProductCartCard
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
          <View style={styles.finalPrice}>
            <Text>Total price: </Text>
            <Text style={Styles.text1}>
              $ {totalPrice.toFixed(2)}
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: 30,
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 400,
  },
  text: {
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
  finalPrice: {
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
