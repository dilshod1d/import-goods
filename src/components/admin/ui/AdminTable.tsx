type Column<T> = {
  header: string;
  accessor: keyof T;
};

type AdminTableProps<T> = {
  columns: Column<T>[];
  data: T[];
};

export default function AdminTable<T>({ columns, data }: AdminTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-xl shadow-xl bg-white border border-gray-200">
      <table className="min-w-full divide-y divide-gray-100 text-sm text-left">
        <thead className="bg-blue-50 text-blue-900 font-semibold text-sm">
          <tr>
            {columns.map((col) => (
              <th key={String(col.accessor)} className="px-4 py-3">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-gray-700">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-orange-50 transition">
              {columns.map((col) => (
                <td key={String(col.accessor)} className="px-4 py-2">
                  {String(row[col.accessor])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
