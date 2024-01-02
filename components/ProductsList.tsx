import {
  View,
  StyleSheet,
} from "react-native";
import { Product } from "../utils/types";
import ProductListCard from "../components/ProductListCard";
import React from "react";

interface PropTypes {
  products: Product[];
}

const ProductsList = ({ products }: PropTypes) => {
  return (
    <View style={styles.list}>
      {products?.map((product) => (
        <ProductListCard key={product.id} product={product} />
      ))}
    </View>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
