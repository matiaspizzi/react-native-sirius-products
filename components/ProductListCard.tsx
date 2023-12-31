import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { Product, RootStackParamList } from "../utils/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import Styles from "../utils/styles";

interface PropTypes {
  product: Product;
}

const ProductListCard = ({ product }: PropTypes) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate("Product", { id: `${product.id}` });
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.card}>
        <Image
          style={Styles.imageMd}
          source={{
            uri: product.image,
          }}
        />
        <Text style={Styles.text2} ellipsizeMode="tail" numberOfLines={3}>
          {product.title}
        </Text>
        <Text style={Styles.textBold}>${product.price}</Text>
      </View>
    </Pressable>
  );
};

export default ProductListCard;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "space-around",
    width: 170,
    height: 250,
    backgroundColor: "white",
    padding: 6,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    borderWidth: 1,
    borderColor: "white",
  },
});
