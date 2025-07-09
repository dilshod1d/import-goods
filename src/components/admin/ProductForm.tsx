import { Product } from '@/api/product';
import { useState } from 'react';

export default function ProductForm({
  initialData,
  onSubmit
}: {
  initialData?: Partial<Product>;
  onSubmit: (data: any) => void;
}) {
  const [form, setForm] = useState<Partial<Product>>(initialData || {});

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-4"
    >
      <input
        className="input"
        placeholder="Product Name"
        value={form.name || ''}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="input"
        placeholder="SKU"
        value={form.sku || ''}
        onChange={(e) => setForm({ ...form, sku: e.target.value })}
      />
      <input
        type="number"
        className="input"
        placeholder="Stock"
        value={form.stock || ''}
        onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })}
      />
      {/* Add fields for tiered pricing editor as needed */}
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
}
