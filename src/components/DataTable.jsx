import React from 'react';

const DataTable = ({ data, visibleColumns }) => {

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10">
        No records found
      </p>
    );
  }

  // Render cell function with plugin handling
  const renderCell = (value, colName) => {
    if (colName === "plugin") {
      if (!value) return <span className="text-gray-400">No Plugin</span>;
      if (value.short_url) {
        return (
          <a
            href={value.short_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Open Plugin
          </a>
        );
      }
      return <span className="text-gray-400">No Plugin</span>;
    }

    if (value === null || value === undefined) return "N/A";
    if (typeof value === "string" && value.includes("<")) {
      return <span dangerouslySetInnerHTML={{ __html: value }} />;
    }
    if (typeof value === "object") return JSON.stringify(value);
    return value;
  };

  return (
    <div className="relative overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        {/* Table Header */}
        <thead className="bg-gray-50 sticky top-0 z-10">
          <tr>
            {visibleColumns.map((col) => (
              <th
                key={col}
                className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
              >
                {col.replace(/_/g, " ")}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50 transition-colors duration-150">
              {visibleColumns.map((col) => (
                <td
                  key={col}
                  className="px-4 py-2 text-sm text-gray-800 whitespace-normal"
                >
                  {renderCell(row[col], col)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
