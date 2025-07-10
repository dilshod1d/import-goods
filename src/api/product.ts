import axios from "axios";
import { TieredPrice } from "@/types/tieredPrice";

export interface Product {
  _id: string;
  name: string;
  description: string;
  sku: string;
  category: string;
  images: string[];
  moq: number;
  tieredPricing: TieredPrice[];
  stock: number;
  isActive: boolean;
}

export const fetchAllProducts = async (): Promise<Product[]> => {
  const res = await axios.get("/api/products");
  return res.data;
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const res = await axios.get(`/api/products/${id}`);
  return res.data;
};

export const createProduct = async (data: Partial<Product>) => {
  const res = await axios.post("/api/admin/products", data);
  return res.data;
};

export const updateProduct = async (id: string, data: Partial<Product>) => {
  const res = await axios.put(`/api/admin/products/${id}`, data);
  return res.data;
};

export const deleteProduct = async (id: string) => {
  await axios.delete(`/api/admin/products/${id}`);
};
