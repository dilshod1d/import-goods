export default function CartSummary({ total }: { total: number }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold mb-2">Order Summary</h4>
      <div className="flex justify-between mb-2">
        <span>Total</span>
        <span className="font-bold">${total.toFixed(2)}</span>
      </div>
      <a
        href="/checkout"
        className="block w-full text-center bg-brand text-white py-2 rounded-full mt-3"
      >
        Proceed to Checkout
      </a>
    </div>
  );
}
