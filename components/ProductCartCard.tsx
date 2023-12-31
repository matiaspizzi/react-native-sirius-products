import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { Product, RootStackParamList } from '../utils/types'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { useToast } from 'react-native-toast-notifications'
import { NavigationProp, useNavigation } from '@react-navigation/native'

interface PropTypes{
  product: Product,
  quantity: number
}

const ProductListCard = ({product, quantity}: PropTypes) => {

  const { removeFromCart } = useContext(CartContext)

  const toast = useToast()
  
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  
  const handleRemove = () => {
    removeFromCart(product)
    toast.show("Product removed", {
      type: "success",
      placement: "bottom",
      duration: 2000,
    });
  }

  const handlePress = () => {
    navigation.navigate('Product', { id: `${product.id}` })
  }

  return(
      <Pressable style={styles.card} onPress={handlePress}>
        <Image
          style={styles.image}
          source={{
            uri: product.image
          }}
        />
        <View style={styles.detail}>
            <Text style={styles.title} ellipsizeMode='tail' numberOfLines={2}>{product.title}</Text>
            <Text style={{color: 'grey', fontSize: 12}}>1x ${product.price}</Text>
            <Text style={{fontWeight: 'bold'}}>${(product.price * quantity).toFixed(2)}</Text>
        </View>
        <View style={styles.container}>
            <Text style={{color: 'grey', fontWeight: 'bold'}}>x{quantity}</Text>
            <Pressable style={styles.button} onPress={handleRemove}>
                <Text style={{fontSize: 10}}>Eliminar</Text>
            </Pressable>
        </View>
      </Pressable>
  )
}

export default ProductListCard

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 100,
    maxWidth: 400,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 14,
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
  },
  container: {
    backgroundColor: 'white',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 0.25,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4,
    shadowColor: 'red',
  },
  detail: {
    minWidth: 150,
    flex: 1,
    flexDirection: 'column',
    gap: 4,
    alignItems: 'flex-start',
  }
})