import { AdminUser } from '@/api/adminUsers';
import { useToggleUserBlock, useUserOrders } from '@/hooks/useAdminUsers';
import { useState } from 'react';

export default function UserTable({ users }: { users: AdminUser[] }) {
  const { mutate } = useToggleUserBlock();
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const { data: orders } = useUserOrders(selectedUser || '');

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <table className="w-full text-sm border">
        <thead>
          <tr>
            <th>Email</th>
            <th>Company</th>
            <th>Blocked</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id} className={u.isBlocked ? 'bg-red-50' : ''}>
              <td>{u.email}</td>
              <td>{u.companyName || '-'}</td>
              <td>{u.isBlocked ? 'Yes' : 'No'}</td>
              <td className="space-x-2">
                <button onClick={() => mutate(u._id)} className="text-blue-600 text-xs">
                  {u.isBlocked ? 'Unblock' : 'Block'}
                </button>
                <button onClick={() => setSelectedUser(u._id)} className="text-brand text-xs">
                  View Orders
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bg-white rounded-lg shadow-soft p-4">
        <h3 className="text-lg font-semibold mb-2">Order History</h3>
        {!selectedUser ? (
          <p className="text-sm text-gray-500">Select a user to view orders.</p>
        ) : orders?.length ? (
          <ul className="space-y-1 text-sm">
            {orders.map((o: any) => (
              <li key={o._id} className="border-b py-1">
                #{o._id.slice(-6)} — ${o.total.toFixed(2)} — {o.status}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No orders found.</p>
        )}
      </div>
    </div>
  );
}
