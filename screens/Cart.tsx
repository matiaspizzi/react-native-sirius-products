import { StyleSheet, ScrollView, View } from 'react-native';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react'
import ProductCartCard from '../components/ProductCartCard';

const CartScreen = () => {

  const { cart } = useContext(CartContext)

  return (
    <ScrollView>
      <View style={styles.View}>
        {cart?.map((item) => (
          <ProductCartCard key={item.product.id} product={item.product} quantity={item.quantity} />
        ))}
      </View>
    </ScrollView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  View: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})