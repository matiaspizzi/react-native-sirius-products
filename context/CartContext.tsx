import { createContext, useState, ReactNode } from "react";
import { Product, CartItem } from "../utils/types";

const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  updateCart: (cart: CartItem[]) => void;
}>({ cart: [], addToCart: () => {}, updateCart: () => {} });

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    setCart([...cart, { product, quantity }]);
  };

  const updateCart = (cart: CartItem[]) => {
    setCart(cart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
