'use client';
import { useAdminUsers } from '@/hooks/useAdminUsers';
import UserTable from '@/components/admin/UserTable';

export default function AdminUsersPage() {
  const { data, isLoading } = useAdminUsers();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">User Management</h1>
      {isLoading ? <p>Loading...</p> : <UserTable users={data || []} />}
    </div>
  );
}
