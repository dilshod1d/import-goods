export default function KPI({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white shadow-soft p-4 rounded-2xl text-center">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-2xl font-bold text-brand mt-1">${value.toLocaleString()}</div>
    </div>
  );
}
