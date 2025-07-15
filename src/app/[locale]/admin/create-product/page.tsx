"use client";

import dynamic from "next/dynamic";

const ProductForm = dynamic(() => import("@/components/admin/ProductForm"), {
  ssr: false,
});

export default function CreateProductPage() {
  return <ProductForm />;
}
