import { CartItem } from '@/types/cart';
import { useCartStore } from '@/store/cartStore';

export default function CartItemCard({ item }: { item: CartItem }) {
  const updateItem = useCartStore((s) => s.updateItem);
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <div className="flex items-center gap-4 border-b py-4">
      <img src={item.image} className="w-20 h-20 object-cover rounded-lg" />
      <div className="flex-1">
        <h3 className="text-lg font-medium">{item.name}</h3>
        <p className="text-sm text-gray-500">MOQ: {item.moq}</p>
        <p className="text-sm">
          Qty: 
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateItem(item.productId, Number(e.target.value))}
            className="w-16 ml-2 border px-1"
          />
        </p>
        <p className="text-sm text-gray-700">Subtotal: ${item.totalPrice.toFixed(2)}</p>
      </div>
      <button onClick={() => removeItem(item.productId)} className="text-red-600 text-sm">
        Remove
      </button>
    </div>
  );
}
