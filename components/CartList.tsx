import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CartItem } from '../utils/types';
import ProductCartCard from './ProductCartCard';
import FinalPrice from './FinalPrice';

interface PropTypes {
  cartItems: CartItem[];
}

const CartList = ( { cartItems }: PropTypes ) => {

  const totalPrice = cartItems?.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  return(
    <View style={styles.view}>
    {cartItems?.map((item) => (
      <ProductCartCard
        key={item.product.id}
        product={item.product}
        quantity={item.quantity}
      />
    ))}
    <FinalPrice price={totalPrice.toFixed(2)} />
  </View>
  )
}

export default CartList;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
})