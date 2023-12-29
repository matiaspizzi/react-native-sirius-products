import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useState, useContext } from 'react'
import { Product } from '../utils/types'
import { CartContext } from '../context/CartContext'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useToast } from "react-native-toast-notifications";

interface PropTypes {
  product: Product
}

const CartButton = ({product}: PropTypes) => {
  const [quantity, setQty] = useState<number>(1)

  const { addToCart } = useContext(CartContext)

  const toast = useToast();

  const handleButton = () => {
    addToCart(product, quantity)
    toast.show("Product added to cart", {
      type: "success",
      placement: "bottom",
      duration: 2000,
    });
  }

  const handleSum = () =>{
    if (quantity < 9)
      setQty(quantity + 1)
  }

  const handleRest = () => {
    if (quantity > 1) 
      setQty(quantity - 1)
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handleButton} style={styles.button}>
        <FontAwesome5 name="cart-plus" size={24} color="black" />
      </Pressable>
      <View style={styles.counter}>
        <Pressable onPress={handleRest} style={styles.button}>
          <Text>-</Text>
        </Pressable>
        <Text>{quantity}</Text>
        <Pressable onPress={handleSum} style={styles.button}>
          <Text>+</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CartButton

const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: 'white',
    height: 40,
    width: 100,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    borderRadius: 5
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 20
  },
  button: {
    padding: 8,
    borderRadius: 5
  }


})