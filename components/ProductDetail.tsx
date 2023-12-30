import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import { Product } from '../utils/types'

interface PropTypes {
  product: Product
}

const ProductDetail = ({ product }: PropTypes) => {

  return (
    <ScrollView>
      <View style={styles.view}>
        <Text style={styles.title}>{product.title}</Text>
        <Image source={{ uri: product?.image }} style={styles.image} />
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>$ {product.price}</Text>
      </View>
    </ScrollView>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  view: {
    margin: 15,
    padding: 10,
    minHeight: 500,
    maxWidth: 400,
    gap: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    color: "grey",
    maxWidth: 300,
  },
  price: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#6897bb",
  },
});