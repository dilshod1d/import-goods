import { Product } from '@/api/product';
import Link from 'next/link';

export default function ProductTable({ products }: { products: Product[] }) {
  return (
    <table className="w-full text-sm border">
      <thead>
        <tr>
          <th>Name</th>
          <th>Stock</th>
          <th>MOQ</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p._id}>
            <td>{p.name}</td>
            <td>{p.stock}</td>
            <td>{p.moq}</td>
            <td>
              <Link href={`/admin/products/${p._id}/edit`} className="text-blue-600">Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
