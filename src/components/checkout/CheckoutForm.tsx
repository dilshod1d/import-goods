"use client";
import { usePlaceOrder } from "@/hooks/useCheckout";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutForm() {
  const { mutateAsync } = usePlaceOrder();
  const items = useCartStore((s) => s.items);
  const clear = useCartStore((s) => s.clear);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    company: "",
    address: "",
    phone: "",
  });
  const router = useRouter();

  const submit = async () => {
    const res = await mutateAsync({ items, shippingInfo });
    clear();
    router.push(`/order/${res.orderId}`);
  };

  return (
    <div className="space-y-4 max-w-xl">
      {Object.entries(shippingInfo).map(([field, val]) => (
        <input
          key={field}
          className="input"
          placeholder={field}
          value={val}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, [field]: e.target.value })
          }
        />
      ))}
      <button onClick={submit} className="btn btn-primary w-full">
        Place Order
      </button>
    </div>
  );
}
