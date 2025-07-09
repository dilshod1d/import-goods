import { useState } from "react";
import axios from "axios";

export default function OrderTable({ orders }: { orders: any[] }) {
  const [localOrders, setLocalOrders] = useState(orders);

  const updateStatus = async (id: string, status: string) => {
    await axios.put(`/api/admin/orders/${id}/status`, { status });
    setLocalOrders((prev) =>
      prev.map((o) => (o._id === id ? { ...o, status } : o))
    );
  };

  return (
    <table className="w-full text-sm border">
      <thead>
        <tr>
          <th>ID</th>
          <th>Buyer</th>
          <th>Status</th>
          <th>Total</th>
          <th>Items</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {localOrders.map((o) => (
          <tr key={o._id} className="border-t">
            <td>{o._id}</td>
            <td>{o.shippingInfo.name}</td>
            <td>{o.status}</td>
            <td>${o.total.toFixed(2)}</td>
            <td>
              <ul className="text-xs list-disc pl-4">
                {o.items.map((item: any) => (
                  <li key={item.productId}>
                    {item.name} × {item.quantity}
                  </li>
                ))}
              </ul>
            </td>
            <td>
              <select
                value={o.status}
                onChange={(e) => updateStatus(o._id, e.target.value)}
                className="border rounded px-1 py-0.5"
              >
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
