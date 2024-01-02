import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Product, RootStackParamList } from "../utils/types";
import { useCartContext } from "../hooks/useCartContext";
import { useToast } from "react-native-toast-notifications";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Styles from "../utils/styles";
import React from "react";
import Button from "./Button";

interface PropTypes {
  product: Product;
  quantity: number;
}

const ProductListCard = ({ product, quantity }: PropTypes) => {
  const toast = useToast();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { removeFromCart } = useCartContext();

  const handleRemove = () => {
    removeFromCart(product);
    toast.show("Product removed", {
      type: "success",
      placement: "bottom",
      duration: 2000,
    });
  };

  const handlePress = () => {
    navigation.navigate("Product", { id: `${product.id}` });
  };

  return (
    <Pressable style={styles.card} onPress={handlePress}>
      <Image
        style={Styles.imageSm}
        source={{
          uri: product.image,
        }}
      />
      <View style={styles.detail}>
        <Text style={Styles.text2} ellipsizeMode="tail" numberOfLines={2}>
          {product.title}
        </Text>
        <Text style={Styles.text2}>1x ${product.price}</Text>
        <Text>${(product.price * quantity).toFixed(2)}</Text>
      </View>
      <View style={styles.align}>
        <Text style={Styles.text3}>x{quantity}</Text>
        <Button
          title="Remove"
          onPress={handleRemove}
          style={{ secondary: "red" }}
        />
      </View>
    </Pressable>
  );
};

export default ProductListCard;

const styles = StyleSheet.create({
  card: {
    marginTop: 4,
    flex: 1,
    flexDirection: "row",
    minHeight: 100,
    width: 400,
    gap: 10,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    padding: 14,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  detail:{
    maxWidth: 200,
  },
  align: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
