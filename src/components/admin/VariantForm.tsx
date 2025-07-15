// components/admin/VariantForm.tsx
"use client";
import { Attribute, Variant } from "@/types/product";

interface Props {
  variant: Variant;
  onChange: (v: Variant) => void;
  onRemove: () => void;
  attributes: Attribute[];
}

export default function VariantForm({
  variant,
  onChange,
  onRemove,
  attributes,
}: Props) {
  return (
    <div className="border p-4 rounded-md space-y-4">
      <input
        className="input"
        placeholder="SKU"
        value={variant.sku}
        onChange={(e) => onChange({ ...variant, sku: e.target.value })}
      />
      <input
        type="number"
        className="input"
        placeholder="Price"
        value={variant.price}
        onChange={(e) => onChange({ ...variant, price: +e.target.value })}
      />
      <input
        type="number"
        className="input"
        placeholder="Stock"
        value={variant.stock}
        onChange={(e) => onChange({ ...variant, stock: +e.target.value })}
      />

      {attributes.map((attr) => (
        <select
          key={attr._id}
          className="input"
          value={
            variant.attributes.find((a) => a.attribute === attr._id)?.valueId ||
            ""
          }
          onChange={(e) => {
            const newAttrs = [...variant.attributes];
            const index = newAttrs.findIndex((a) => a.attribute === attr._id);
            if (index >= 0) {
              newAttrs[index].valueId = e.target.value;
            } else {
              newAttrs.push({ attribute: attr._id, valueId: e.target.value });
            }
            onChange({ ...variant, attributes: newAttrs });
          }}
        >
          <option value="">Select {attr.name}</option>
          {attr.values.map((v) => (
            <option key={v.id} value={v.id}>
              {v.value}
            </option>
          ))}
        </select>
      ))}

      <button onClick={onRemove} className="text-red-500 text-sm">
        Remove Variant
      </button>
    </div>
  );
}
