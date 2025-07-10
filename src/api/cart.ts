import axios from "axios";
import { CartItem } from "@/types/cart";

// types/cart.ts (or types/order.ts)
export type ShippingInfo = {
  name: string;
  address: string;
  email: string;
  phone?: string;
  company: string;
};

export const calculateCartTotal = async (items: CartItem[]) => {
  const res = await axios.post("/api/orders/cart/calculate", { items });
  return res.data; // { items: CartItem[], total: number }
};

export const placeOrder = async ({
  items,
  shippingInfo,
}: {
  items: CartItem[];
  shippingInfo: ShippingInfo;
}) => {
  const res = await axios.post("/api/orders", { items, shippingInfo });
  return res.data; // { orderId }
};
