import { Button, View, Text } from 'react-native'
import { useState, useContext } from 'react'
import { Product } from '../utils/types'
import { CartContext } from '../context/CartContext'

interface Props {
  product: Product
}

const CartButton = ({product}: Props) => {
  const [quantity, setQty] = useState<number>(1)

  const { cart, addToCart } = useContext(CartContext)

  const handleButton = () => {
    addToCart(product, quantity)
    console.log(cart)
  }

  const handleSum = () =>{
    setQty(quantity + 1)
  }

  const handleRest = () => {
    if (quantity > 1) 
      setQty(quantity - 1)
  }

  return (
    <View>
      <Button   
        onPress={handleButton}
        title="Add to the cart"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <View>
        <Button   
          onPress={handleRest}
          title="-"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>{quantity}</Text>
        <Button   
            onPress={handleSum}
            title="+"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
      </View>
    </View>
  )
}

export default CartButton