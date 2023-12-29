export interface ProductsQuery {
  limit?: string;
  sort?: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type RootStackParamList = {
  Product: { id: string };
  Home: undefined;
};