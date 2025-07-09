export default function TopProducts({ products }: { products: { _id: string; quantitySold: number }[] }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-soft">
      <h3 className="font-medium mb-2">Top Products</h3>
      <ul className="space-y-1">
        {products.map((p) => (
          <li key={p._id} className="flex justify-between text-sm">
            <span>{p._id}</span>
            <span className="font-mono">{p.quantitySold}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
