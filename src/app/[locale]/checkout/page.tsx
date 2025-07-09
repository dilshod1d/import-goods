import CheckoutForm from '@/components/checkout/CheckoutForm';

export default function CheckoutPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <CheckoutForm />
    </div>
  );
}
