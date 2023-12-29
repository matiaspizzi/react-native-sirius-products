import { View, Text, StyleSheet, Image } from 'react-native'
import { Product } from '../utils/types'

interface PropTypes{
  product: Product,
  quantity: number
}

const ProductListCard = ({product, quantity}: PropTypes) => {

  return(
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: product.image
          }}
        />
        <View style={styles.container}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={{color: 'grey', fontSize: 12}}>${product.price}</Text>
            <Text style={{fontWeight: 'bold'}}>${(product.price * quantity).toFixed(2)}</Text>
        </View>
        <Text style={{color: 'grey', fontWeight: 'bold'}}>x{quantity}</Text>
      </View>
  )
}

export default ProductListCard

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    width: 400,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4
  },
  image: {
    resizeMode: 'contain',
    height: 80,
    width: 80,
  },
  title: {
    color: 'grey',
    width: 250
  },
  container: {
    
  }
})