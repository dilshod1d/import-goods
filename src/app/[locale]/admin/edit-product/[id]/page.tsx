import ProductForm from "@/components/admin/ProductForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { fetchProductById } from "@/api/product";

export default function EditProductPage() {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const load = async () => {
      if (router.query.id && typeof router.query.id === "string") {
        const data = await fetchProductById(router.query.id);
        setProduct(data as Product);
      }
    };
    load();
  }, [router.query.id]);

  if (!product) return <p className="p-4 text-gray-500">Loading...</p>;

  return <ProductForm product={product} isEdit />;
}
