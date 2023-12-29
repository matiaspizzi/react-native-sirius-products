import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import service from '../utils/service'
import { Product } from '../utils/types'
import ProductCard from './ProductCard'

const ProductsList = () =>{
  const [products, setProducts] = useState<Product[] | undefined>();
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    service.getProducts({}).then((res) =>{
      setProducts(res ? res : undefined)
      setLoading(false)
    })
  }, [])

  return loading ? 
  (
    <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <ScrollView>
      <View style={styles.view}>
        {products?.map((product) =>(
          <ProductCard key={product.id} product={product} />
        ))}
      </View>
    </ScrollView>
  )
}

export default ProductsList

const styles = StyleSheet.create({
  view: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  }
})