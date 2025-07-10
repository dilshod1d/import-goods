"use client"
import { useProducts } from '@/hooks/useProducts';
import ProductTable from '@/components/admin/ProductTable';

export default function AdminProductList() {
  const { data } = useProducts();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      <ProductTable products={data || []} />
    </div>
  );
}
