import { InventoryProduct } from "@/api/inventory";
import { useUpdateStock } from "@/hooks/useInventory";
import { useState } from "react";

export default function InventoryTable({ data }: { data: InventoryProduct[] }) {
  const { mutate } = useUpdateStock();
  const [localStock, setLocalStock] = useState<Record<string, number>>({});

  const update = (id: string) => {
    mutate({ id, stock: localStock[id] });
  };

  return (
    <table className="w-full text-sm border">
      <thead>
        <tr>
          <th>Name</th>
          <th>SKU</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {data.map((p) => {
          const isLow = p.stock < 10;
          return (
            <tr key={p._id} className={isLow ? "bg-red-50" : ""}>
              <td>{p.name}</td>
              <td>{p.sku}</td>
              <td>{p.category}</td>
              <td>
                <input
                  type="number"
                  className="w-20 border px-1 py-0.5 rounded"
                  defaultValue={p.stock}
                  onChange={(e) =>
                    setLocalStock({
                      ...localStock,
                      [p._id]: Number(e.target.value),
                    })
                  }
                />
              </td>
              <td>
                <button
                  className="text-blue-600 text-xs"
                  onClick={() => update(p._id)}
                >
                  Save
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
