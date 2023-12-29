import { useContext } from 'react';
import { CartContext } from '../context/CartContext'

const useCartLength = () => {
  const { cart } = useContext(CartContext);
  return cart.length;
};

export default useCartLength;