import axios from 'axios';

export interface InventoryProduct {
  _id: string;
  name: string;
  stock: number;
  sku: string;
  category: string;
}

export const fetchInventory = async (): Promise<InventoryProduct[]> => {
  const res = await axios.get('/api/admin/inventory');
  return res.data;
};

export const updateProductStock = async ({
  id,
  stock
}: {
  id: string;
  stock: number;
}) => {
  const res = await axios.put(`/api/admin/inventory/${id}/stock`, { stock });
  return res.data;
};
