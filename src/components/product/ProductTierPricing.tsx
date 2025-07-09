import { TieredPrice } from "@/types/tieredPrice";


export default function ProductTierPricing({ tiers }: { tiers: TieredPrice[] }) {
  return (
    <table className="w-full text-sm border-t border-gray-200 mt-4">
      <thead>
        <tr>
          <th className="text-left py-1">Quantity</th>
          <th className="text-left py-1">Unit Price</th>
        </tr>
      </thead>
      <tbody>
        {tiers.map((tier, i) => (
          <tr key={i}>
            <td>{tier.minQty} - {tier.maxQty === Infinity ? '+' : tier.maxQty}</td>
            <td>${tier.price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
