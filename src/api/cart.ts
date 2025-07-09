import axios from 'axios';
import { CartItem } from '@/types/cart';

export const calculateCartTotal = async (items: CartItem[]) => {
  const res = await axios.post('/api/orders/cart/calculate', { items });
  return res.data; // { items: CartItem[], total: number }
};

export const placeOrder = async ({
  items,
  shippingInfo
}: {
  items: CartItem[];
  shippingInfo: any;
}) => {
  const res = await axios.post('/api/orders', { items, shippingInfo });
  return res.data; // { orderId }
};
