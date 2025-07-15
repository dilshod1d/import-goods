import api from "./api";
import { Product } from "@/types/product";

export const fetchAllProducts = async (): Promise<Product[]> => {
  const res = await api.get("/products");
  return res.data;
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

export const createProduct = async (formData: FormData): Promise<Product> => {
  const res = await api.post("/products", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const updateProduct = async (
  id: string,
  formData: FormData
): Promise<Product> => {
  const res = await api.put(`/products/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const deleteProduct = async (id: string) => {
  await api.delete(`/products/${id}`);
};

// import api from "./api";
// import { TieredPrice } from "@/types/tieredPrice";

// export interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   sku: string;
//   category: string;
//   images: string[];
//   moq: number;
//   tieredPricing: TieredPrice[];
//   stock: number;
//   isActive: boolean;
// }

// // ✅ Fetch All Products
// export const fetchAllProducts = async (): Promise<Product[]> => {
//   const res = await api.get("/products");
//   return res.data;
// };

// // ✅ Fetch Product By ID
// export const fetchProductById = async (id: string): Promise<Product> => {
//   const res = await api.get(`/products/${id}`);
//   return res.data;
// };

// // ✅ Create Product (accepts FormData directly)
// export const createProduct = async (formData: FormData): Promise<Product> => {
//   const res = await api.post("/products", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

//   console.log("response", res);

//   return res.data;
// };

// // ✅ Update Product (accepts FormData directly)
// export const updateProduct = async (
//   id: string,
//   formData: FormData
// ): Promise<Product> => {
//   const res = await api.put(`/products/${id}`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

//   return res.data;
// };

// // ✅ Delete Product
// export const deleteProduct = async (id: string) => {
//   await api.delete(`/admin/products/${id}`);
// };
