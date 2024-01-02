import React from "react";
import {
  View,
  ActivityIndicator,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import service from "../utils/service";
import { useEffect, useState } from "react";
import { Product, RootStackParamList } from "../utils/types";
import ProductDetail from "../components/ProductDetail";
import CartButton from "../components/CartButton";
import Constants from "../utils/constants";

type PropTypes = {
  route?: RouteProp<RootStackParamList, "Product">;
};

const ProductScreen = ({ route }: PropTypes) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const { id } = route?.params || {};

  useEffect(() => {
    setLoading(true);
    if (!id) {
      setError(new Error("No product id provided"));
      return;
    }
    service
      .getProduct(id)
      .then((res) => {
        setProduct(res);
        setLoading(false);
      })
      .catch((e: Error) => {
        setError(e);
      });
  }, [id]);

  return (
    <View>
      {loading && !error && (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={Constants.colors.lightBlue} />
        </View>
      )}
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error!.message}</Text>
          <Text>
            Sorry, we had a problem loading the products, try again later.
          </Text>
        </View>
      )}
      {product && (
        <ScrollView>
          <View style={styles.container}>
            <ProductDetail product={product} />
            <CartButton product={product} />
          </View>
        </ScrollView>
      )}
      {!product && !loading && (
        <View>
          <Text>No product found.</Text>
        </View>
      )}
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingBottom: 10,
  },
  errorContainer: {
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 400,
  },
  errorText: {
    color: "red",
    fontSize: 10,
    fontWeight: "bold",
  },
});
