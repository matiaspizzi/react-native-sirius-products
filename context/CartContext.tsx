import { createContext, useState, ReactNode, useEffect } from "react";
import { Product, CartItem } from "../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: Product) => void;
}>({ cart: [], addToCart: () => {}, removeFromCart: () => {} });

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const setStorage = async (cart: CartItem[]) => {
    await AsyncStorage.setItem("cart", JSON.stringify(cart));
  };

  const getCart = async () => {
    const cart = await AsyncStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const isInCart = (id: string): number => {
    const i = cart.findIndex((item) => item.product.id === id);
    return i;
  };

  const addToCart = (product: Product, quantity: number) => {
    const i = isInCart(product.id);
    if (i !== -1) {
      const newCart = [...cart];
      newCart[i].quantity += quantity;
      setCart(newCart);
      setStorage(newCart);
    } else {
      setCart([...cart, { product, quantity }]);
      setStorage([...cart, { product, quantity }]);
    }
  };

  const removeFromCart = (product: Product) => {
    const newCart = cart.filter((item) => item.product.id !== product.id);
    setCart(newCart);
    setStorage(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
