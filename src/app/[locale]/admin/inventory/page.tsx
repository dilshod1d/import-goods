"use client";
import { useInventory } from "@/hooks/useInventory";
import InventoryTable from "@/components/admin/InventoryTable";

export default function InventoryPage() {
  const { data, isLoading } = useInventory();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Inventory Management</h1>
      {isLoading ? <p>Loading...</p> : <InventoryTable data={data || []} />}
    </div>
  );
}
