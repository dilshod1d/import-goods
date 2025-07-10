import { TieredPrice } from "./tieredPrice";

export interface Product {
  _id: string;
  name: string;
  description?: string;
  sku: string;
  category?: string;
  images: string[];
  moq: number;
  tieredPricing: TieredPrice[];
  stock: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
