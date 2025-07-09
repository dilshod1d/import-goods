import { useRouter } from "next/router";
import { useProduct, useUpdateProduct } from "@/hooks/useProducts";
import ProductForm from "@/components/admin/ProductForm";

export default function EditProductPage() {
  const { query } = useRouter();
  const { data } = useProduct(query.id as string);
  const { mutate } = useUpdateProduct();

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit Product</h1>
      <ProductForm
        initialData={data}
        onSubmit={(form) => mutate({ id: data._id, data: form })}
      />
    </div>
  );
}
