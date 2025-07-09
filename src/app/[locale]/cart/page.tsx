import { useCartStore } from '@/store/cartStore';
import CartItemCard from '@/components/cart/CartItemCard';
import CartSummary from '@/components/cart/CartSummary';
import { useCartPricing } from '@/hooks/useCheckout';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const cartItems = useCartStore((s) => s.items);
  const { mutateAsync } = useCartPricing();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cartItems.length) {
      mutateAsync(cartItems).then((res) => {
        useCartStore.setState({ items: res.items });
        setTotal(res.total);
      });
    }
  }, [cartItems]);

  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">
        {cartItems.map((item) => (
          <CartItemCard key={item.productId} item={item} />
        ))}
      </div>
      <CartSummary total={total} />
    </div>
  );
}
