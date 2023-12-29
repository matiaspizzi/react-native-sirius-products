import { Button, View, Text, StyleSheet, Pressable } from 'react-native'
import { useState, useContext } from 'react'
import { Product } from '../utils/types'
import { CartContext } from '../context/CartContext'
import { FontAwesome5 } from '@expo/vector-icons'; 

interface PropTypes {
  product: Product
}

const CartButton = ({product}: PropTypes) => {
  const [quantity, setQty] = useState<number>(1)

  const { cart, addToCart } = useContext(CartContext)

  const handleButton = () => {
    addToCart(product, quantity)
  }

  const handleSum = () =>{
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
    height: 30,
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
    padding: 3,
    borderRadius: 5
  }


})