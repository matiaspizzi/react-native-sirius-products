import { View, ActivityIndicator, ScrollView, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import service from "../utils/service";
import { useEffect, useState } from "react";
import { Product, RootStackParamList } from "../utils/types";
import ProductDetail from "../components/ProductDetail";
import CartButton from "../components/CartButton";

type ProductScreenRouteProp = RouteProp<RootStackParamList, "Product">;

type PropTypes = {
  route: ProductScreenRouteProp;
};

const ProductScreen = ({ route }: PropTypes) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null)

  const { id } = route.params || {};

  useEffect(() => {
    service.getProduct(id).then((res) => {
      setProduct(res);
      setLoading(false);
    }).catch((e: Error) => {
      setError(e)
    })
  }, []);

  return loading && !error ? (
    <View style={{ alignSelf: 'center', flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : error ? (
    <View style={{ alignSelf: 'center', flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: 400 }}>
      <Text style={{color:'red', fontSize: 10, fontWeight: 'bold'}}>{error.message}</Text>
      <Text style={{fontSize: 14,}}>Sorry, we had a problem loading the products, try again later.</Text>
    </View>
  ): product ? (
    <ScrollView>
      <ProductDetail product={product} />
      <CartButton product={product} />
    </ScrollView>
  ) : null
};

export default ProductScreen;
