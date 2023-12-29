import { View, ActivityIndicator, ScrollView } from "react-native";
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

  const { id } = route.params || {};

  useEffect(() => {
    service.getProduct(id).then((res) => {
      setProduct(res);
      setLoading(false);
    });
  }, []);

  return product ? (
    <ScrollView>
      <ProductDetail product={product} />
      <CartButton product={product} />
    </ScrollView>
  ) : (
    <View style={{ alignSelf: "center", flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default ProductScreen;
