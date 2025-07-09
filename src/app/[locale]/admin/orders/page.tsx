'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import OrderTable from '@/components/admin/OrderTable';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/orders').then(res => setOrders(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Order Management</h1>
      <OrderTable orders={orders} />
    </div>
  );
}
