function FinalDataTable({ data }) {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full table-auto border border-gray-300 shadow rounded-lg">
        <thead className="bg-gray-200 text-gray-700 text-left">
          <tr>
            <th className="px-4 py-2 border-b">Item</th>
            <th className="px-4 py-2 border-b">Selected Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key} className="even:bg-gray-100">
              <td className="px-4 py-2 border-b font-medium">{key}</td>
              <td className="px-4 py-2 border-b">{value || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FinalDataTable