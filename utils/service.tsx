import axios from "axios";
import { ProductsQuery, Product } from "./types";

const url =
  process.env.REACT_APP_API_URL || "https://fakestoreapi.com/products";

const service = {
  getProducts: async (query: ProductsQuery): Promise<Product[] | undefined> => {
    try {
      const queryLimit = query.limit ? `?limit=${query.limit}` : ``;
      const querySort = query.sort ? `?sort=${query.sort}` : ``;
      const res = await axios.get(`${url}${queryLimit + querySort}`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching products");
    }
  },
  getProduct: async (id: string): Promise<Product | undefined> => {
    try {
      const res = await axios.get(`${url}/${id}`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching product");
    }
  },
};

export default service;
