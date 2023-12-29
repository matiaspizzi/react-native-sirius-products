import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { RouteProp } from "@react-navigation/native";
import service from "../utils/service";
import { useEffect, useState } from "react";
import { Product, RootStackParamList } from "../utils/types";
import CartButton from '../components/CartButton'

type ProductScreenRouteProp = RouteProp<RootStackParamList, "Product">;

type Props = {
  route: ProductScreenRouteProp;
};

const ProductScreen = ({ route }: Props) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const { id } = route.params || {};

  console.log(id);

  useEffect(() => {
    service.getProduct(id).then((res) => {
      setProduct(res);
      setLoading(false);
      console.log(res);
    });
  }, []);

  return product ? (
    <View style={styles.view}>
      <Text style={styles.title}>{product.title}</Text>
      <Image source={{ uri: product?.image }} style={styles.image} />
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>$ {product.price}</Text>
      <CartButton product={product}/>
    </View>
  ) : (
    <View style={{ alignSelf: "center", flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  view: {
    margin: 30,
    padding: 10,
    gap: 20,
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
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
  },
  price: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#425CFF",
  },
});
