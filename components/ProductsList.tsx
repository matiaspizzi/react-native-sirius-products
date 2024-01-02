import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Text,
} from "react-native";
import { useEffect, useState } from "react";
import service from "../utils/service";
import { Product } from "../utils/types";
import ProductListCard from "../components/ProductListCard";
import React from "react";
import Constants from "../utils/constants";
import Styles from "../utils/styles";

const ProductsList = () => {
  const [products, setProducts] = useState<Product[] | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    service
      .getProducts({})
      .then((res) => {
        setProducts(res ? res : undefined);
        setLoading(false);
      })
      .catch((e: Error) => {
        setError(e);
      });
  }, []);

  return (
    <ScrollView>
      {loading && !error && (
        <View style={styles.container} >
          <ActivityIndicator size="large" color={Constants.colors.lightBlue} />
        </View>
      )}
      {error && (
        <View style={Styles.errorContainer}>
          <Text style={Styles.textError}>
            {error.message}
          </Text>
          <Text>
            Sorry, we had a problem loading the products, try again later.
          </Text>
        </View>
      )}
      {products && (
        <View style={styles.list}>
          {products?.map((product) => (
            <ProductListCard key={product.id} product={product} />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 500,
  },
  errorContainer: {
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 400,
  },
});
