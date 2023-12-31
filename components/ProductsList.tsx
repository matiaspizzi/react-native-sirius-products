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
        <View
          style={{
            alignSelf: "center",
            flex: 1,
            justifyContent: "center",
            minHeight: 500,
          }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      {error && (
        <View style={styles.errorContainer}>
          <Text style={{ color: "red", fontSize: 10, fontWeight: "bold" }}>
            {error.message}
          </Text>
          <Text style={{ fontSize: 14 }}>
            Sorry, we had a problem loading the products, try again later.
          </Text>
        </View>
      )}
      {products && (
        <View style={styles.view}>
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
  view: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
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
