"use client";
import { useProducts } from "@/hooks/useProducts";
import ProductGrid from "@/components/product/ProductGrid";

export default function ProductsPage() {
  const { data, isLoading } = useProducts();
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-serif mb-4">Cosmetics</h1>
      <ProductGrid products={data || []} />
    </div>
  );
}
