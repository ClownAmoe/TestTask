import axios from "axios";
import { ProductInfo } from "@/components/ProductCard/type";

export const listProducts = () => async (dispatch: any) => {
  try {
    const response = await axios.get("http://localhost:3000/products");
    dispatch({
      type: "LIST_PRODUCTS",
      payload: response.data,
    });
  } catch (e) {
    console.error("Failed to fetch products:", e);
  }
};

export const addProduct = (product: ProductInfo) => async (dispatch: any) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/products",
      product
    );
    dispatch(listProducts());
    return response.data;
  } catch (e) {
    console.error("Failed to add product:", e);
    throw e;
  }
};
