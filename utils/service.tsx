import axios from "axios";
import { ProductsQuery, Product } from "./types";

const url = process.env.REACT_APP_API_URL || "https://fakestoreapi.com/products";

const service = {
  getProducts: async (query: ProductsQuery): Promise<Product[]|undefined> => {
    const queryLimit = query.limit ? `?limit=${query.limit}` : ``
    const querySort = query.sort ? `?sort=${query.sort}` : ``
    const res = await axios.get(`${url}${queryLimit+querySort}`);
    if (res.status === 200) {
      return res.data
    }
  },
  getProduct: async (id: string): Promise<Product|undefined> => {
    const res = await axios.get(`${url}/${id}`)
    if (res.status === 200) {
      return res.data
    }
  }
}

export default service