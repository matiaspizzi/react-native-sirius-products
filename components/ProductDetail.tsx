import { View, Text, Image, StyleSheet } from "react-native";
import { Product } from "../utils/types";
import React from "react";
import Styles from "../utils/styles";

interface PropTypes {
  product: Product;
}

const ProductDetail = ({ product }: PropTypes) => {
  return (
    <View style={styles.view}>
      <Text style={Styles.title}>{product.title}</Text>
      <Image source={{ uri: product?.image }} style={Styles.imageBg} />
      <Text style={Styles.text2}>{product.description}</Text>
      <Text style={Styles.textBg}>$ {product.price}</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    padding: 10,
    minHeight: "auto",
    maxWidth: 400,
    gap: 20,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    justifySelf: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  }
});
