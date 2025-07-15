"use client";

import { useEffect, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";

import { createProduct, updateProduct } from "@/api/product";
import { Product } from "@/types/product";
import { Attribute, Category } from "@/types/product"; // assuming these types

interface ProductFormProps {
  product?: Product;
  categories: Category[];
  attributes: Attribute[];
  isEdit?: boolean;
}

export default function ProductForm({
  product,
  categories,
  attributes,
  isEdit = false,
}: ProductFormProps) {
  const router = useRouter();
  const [previewImages, setPreviewImages] = useState<string[]>(product?.images || []);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: product || {
      name: "",
      description: "",
      price: 0,
      sku: "",
      category: "",
      moq: 1,
      stock: 0,
      isActive: true,
      variants: [],
    },
  });

  const {
    fields: variantFields,
    append: appendVariant,
    remove: removeVariant,
  } = useFieldArray({
    control,
    name: "variants",
  });

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImageFiles(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  const onSubmit = async (data: Product) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price.toString());
    formData.append("sku", data.sku);
    formData.append("category", data.category);
    formData.append("moq", data.moq.toString());
    formData.append("stock", data.stock.toString());
    formData.append("isActive", String(data.isActive));

    imageFiles.forEach((file) => {
      formData.append("images", file);
    });

    formData.append("variants", JSON.stringify(data.variants));

    try {
      const result = isEdit
        ? await updateProduct(product!._id, formData)
        : await createProduct(formData);
      router.push("/admin/products");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label>Product Name</label>
        <input {...register("name", { required: true })} />
        {errors.name && <span>Name is required</span>}
      </div>

      <div>
        <label>Description</label>
        <textarea {...register("description")} />
      </div>

      <div>
        <label>SKU</label>
        <input {...register("sku", { required: true })} />
      </div>

      <div>
        <label>Price</label>
        <input type="number" {...register("price", { required: true })} />
      </div>

      <div>
        <label>Stock</label>
        <input type="number" {...register("stock")} />
      </div>

      <div>
        <label>MOQ</label>
        <input type="number" {...register("moq")} />
      </div>

      <div>
        <label>Category</label>
        <select {...register("category", { required: true })}>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Is Active</label>
        <input type="checkbox" {...register("isActive")} />
      </div>

      <div>
        <label>Images</label>
        <input type="file" multiple onChange={onImageChange} />
        <div className="flex gap-2 mt-2">
          {previewImages.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="preview"
              width={100}
              height={100}
              className="rounded border"
            />
          ))}
        </div>
      </div>

      <div>
        <label className="font-semibold">Variants</label>
        {variantFields.map((field, index) => (
          <div key={field.id} className="border p-2 mb-2">
            <div>
              <label>Attribute</label>
              <select {...register(`variants.${index}.attributeId`, { required: true })}>
                {attributes.map((attr) => (
                  <option key={attr._id} value={attr._id}>
                    {attr.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Value</label>
              <input {...register(`variants.${index}.value`, { required: true })} />
            </div>

            <button
              type="button"
              onClick={() => removeVariant(index)}
              className="text-red-500 mt-1"
            >
              Remove Variant
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendVariant({ attributeId: "", value: "" })}
          className="mt-2 text-blue-500"
        >
          + Add Variant
        </button>
      </div>

      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        {isEdit ? "Update Product" : "Create Product"}
      </button>
    </form>
  );
}



// "use client";

// import { useEffect, useState } from "react";
// import { useForm, useFieldArray } from "react-hook-form";
// import Image from "next/image";

// import clsx from "clsx";
// import { Product } from "@/types/product";
// import { createProduct, updateProduct } from "@/api/product";
// import { useRouter } from "next/navigation";

// interface ProductFormProps {
//   product?: Product;
//   isEdit?: boolean;
// }

// export default function ProductForm({
//   product,
//   isEdit = false,
// }: ProductFormProps) {
//   const router = useRouter();
//   const [previewImages, setPreviewImages] = useState<string[]>(
//     product?.images || []
//   );
//   const [newImages, setNewImages] = useState<File[]>([]);

//   const {
//     register,
//     handleSubmit,
//     control,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       name: product?.name || "",
//       description: product?.description || "",
//       sku: product?.sku || "",
//       category: product?.category || "",
//       moq: product?.moq || 1,
//       stock: product?.stock || 0,
//       tieredPricing: product?.tieredPricing || [
//         { minQty: 1, maxQty: 10, price: 0 },
//       ],
//     },
//   });

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "tieredPricing",
//   });

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(e.target.files || []);
//     setNewImages(files);
//     const previews = files.map((file) => URL.createObjectURL(file));
//     setPreviewImages(previews);
//   };

//   const onSubmit = async (data: any) => {
//     try {
//       const formData = new FormData();

//       Object.entries(data).forEach(([key, value]) => {
//         if (key === "tieredPricing") {
//           formData.append("tieredPricing", JSON.stringify(value));
//         } else {
//           formData.append(key, value as string);
//         }
//       });

//       newImages.forEach((file) => formData.append("images", file));

//       if (isEdit && product?._id) {
//         await updateProduct(product._id, formData);
//       } else {
//         await createProduct(formData);
//       }

//       router.push("/admin/products");
//     } catch (err) {
//       console.error("Failed to submit product:", err);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
//       <h1 className="text-2xl font-bold mb-6">
//         {isEdit ? "Update" : "Create"} Product
//       </h1>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//         <Input
//           label="Product Name"
//           error={errors.name}
//           {...register("name", { required: true })}
//         />
//         <Input
//           label="SKU"
//           error={errors.sku}
//           {...register("sku", { required: true })}
//         />
//         <Input label="Category" {...register("category")} />
//         <Textarea label="Description" {...register("description")} />

//         <div className="grid grid-cols-2 gap-4">
//           <Input
//             type="number"
//             label="MOQ"
//             error={errors.moq}
//             {...register("moq", { required: true })}
//           />
//           <Input
//             type="number"
//             label="Stock"
//             error={errors.stock}
//             {...register("stock", { required: true })}
//           />
//         </div>

//         {/* Tiered Pricing */}
//         <div>
//           <label className="block font-medium mb-1">Tiered Pricing</label>
//           <div className="space-y-3">
//             {fields.map((field, index) => (
//               <div key={field.id} className="grid grid-cols-3 gap-3">
//                 <input
//                   type="number"
//                   {...register(`tieredPricing.${index}.minQty`, {
//                     required: true,
//                   })}
//                   placeholder="Min Qty"
//                   className="input"
//                 />
//                 <input
//                   type="number"
//                   {...register(`tieredPricing.${index}.maxQty`, {
//                     required: true,
//                   })}
//                   placeholder="Max Qty"
//                   className="input"
//                 />
//                 <input
//                   type="number"
//                   {...register(`tieredPricing.${index}.price`, {
//                     required: true,
//                   })}
//                   placeholder="Price"
//                   className="input"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => remove(index)}
//                   className="text-red-500 text-sm col-span-3 text-right"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => append({ minQty: 1, maxQty: 10, price: 0 })}
//               className="btn-secondary"
//             >
//               + Add Tier
//             </button>
//           </div>
//         </div>

//         {/* Image Upload */}
//         <div>
//           <label className="block font-medium mb-1">Images *</label>
//           <input
//             type="file"
//             multiple
//             onChange={handleImageChange}
//             accept="image/*"
//             className="input"
//           />
//           <div className="flex flex-wrap mt-4 gap-3">
//             {previewImages.map((src, i) => (
//               <Image
//                 key={i}
//                 src={src}
//                 alt={`preview-${i}`}
//                 width={100}
//                 height={100}
//                 className="rounded-md border object-cover"
//               />
//             ))}
//           </div>
//         </div>

//         <button type="submit" className="btn-primary">
//           {isEdit ? "Update Product" : "Create Product"}
//         </button>
//       </form>
//     </div>
//   );
// }

// // Simple input wrapper
// const Input = ({ label, error, ...props }: any) => (
//   <div>
//     <label className="block font-medium mb-1">{label}</label>
//     <input {...props} className="form-input" />
//     {error && <p className="text-red-500 text-sm">Required</p>}
//   </div>
// );

// // Textarea wrapper
// const Textarea = ({ label, ...props }: any) => (
//   <div>
//     <label className="block font-medium mb-1">{label}</label>
//     <textarea {...props} className="input h-28 resize-none" />
//   </div>
// );

