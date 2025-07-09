import { useRouter } from 'next/router';
import { useProduct } from '@/hooks/useProducts';
import ProductTierPricing from '@/components/product/ProductTierPricing';

export default function ProductDetail() {
  const { query } = useRouter();
  const { data } = useProduct(query.id as string);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      <img src={data.images[0]} className="w-full h-[500px] object-cover rounded-xl" />
      <div>
        <h1 className="text-3xl font-serif">{data.name}</h1>
        <p className="text-gray-600">{data.description}</p>
        <ProductTierPricing tiers={data.tieredPricing} />
      </div>
    </div>
  );
}
