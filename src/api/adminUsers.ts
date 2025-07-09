import axios from 'axios';

export interface AdminUser {
  _id: string;
  email: string;
  companyName?: string;
  isBlocked: boolean;
  createdAt: string;
}

export const fetchUsers = async (): Promise<AdminUser[]> => {
  const res = await axios.get('/api/admin/users');
  return res.data;
};

export const toggleUserBlock = async (id: string) => {
  const res = await axios.put(`/api/admin/users/${id}/toggle-block`);
  return res.data;
};

export const fetchUserOrders = async (userId: string) => {
  const res = await axios.get(`/api/admin/users/${userId}/orders`);
  return res.data;
};
