import { createContext, useState, ReactNode, useEffect } from "react";
import { Product, CartItem } from "../utils/types";
import * as SecureStore from 'expo-secure-store';

const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: Product) => void;
}>({ cart: [], addToCart: () => { }, removeFromCart: () => { } });



const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);


  const getCart = async () => {
    const cart = await SecureStore.getItemAsync('cart')
    if (cart) {
      setCart(JSON.parse(cart))
    }
  }
  
  useEffect(() => {
    getCart();
  }, []);

  const isInCart = (id: string): number => {
    const i = cart.findIndex((item) => item.product.id === id);
    return i
  }

  const addToCart = async (product: Product, quantity: number) => {
    const i = isInCart(product.id)
    if (i !== -1) {
      const newCart = [...cart]
      newCart[i].quantity += quantity
      setCart(newCart)
      await SecureStore.setItemAsync('cart', JSON.stringify(newCart))
    } else {
      setCart([...cart, { product, quantity }]);
      await SecureStore.setItemAsync('cart', JSON.stringify([...cart, { product, quantity }]));
    }
  };

  const removeFromCart = async (product: Product) => {
    const newCart = cart.filter(item => item.product.id !== product.id)
    setCart(newCart)
    await SecureStore.setItemAsync('cart', JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
