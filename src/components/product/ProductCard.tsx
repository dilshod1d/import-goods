import { Product } from '@/api/product';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-2xl shadow-soft p-4 bg-white hover:shadow-glow transition-all">
      <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-3" />
      <h3 className="text-lg font-serif">{product.name}</h3>
      <p className="text-sm text-gray-500">MOQ: {product.moq}</p>
      <p className="text-brand font-semibold">
        From ${product.tieredPricing[0].price.toFixed(2)}
      </p>
    </div>
  );
}
