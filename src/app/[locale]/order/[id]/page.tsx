"use client";

import { useParams } from "next/navigation";

export default function OrderConfirmation() {
  const params = useParams();
  const orderId = params.id;

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-brand">Order Placed!</h1>
      <p className="mt-4 text-lg">Thank you for your purchase.</p>
      <p className="text-gray-600 mt-2">Your order ID is:</p>
      <div className="mt-2 text-xl font-mono bg-gray-100 p-2 rounded">
        {orderId}
      </div>
      <a href="/account" className="btn btn-primary mt-6 inline-block">
        View My Orders
      </a>
    </div>
  );
}
