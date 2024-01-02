import {
  View,
  ScrollView,
  ActivityIndicator,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import service from "../utils/service";
import { Product } from "../utils/types";
import Constants from "../utils/constants";
import Styles from "../utils/styles";
import ProductsList from "../components/ProductsList";

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[] | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    service
      .getProducts({ limit: "30" })
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
        <View style={Styles.container}>
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
      {products && <ProductsList products={products}/>}
    </ScrollView>
  );
};

export default HomeScreen;
