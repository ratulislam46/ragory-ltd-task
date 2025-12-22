import React from 'react';
import Loading from './Loading';
import NorecordsFound from './NorecordsFound';

const DataTable = ({ data, visibleColumns, loading }) => {
console.log(data);
  if (loading) return <Loading />

  if (!Array.isArray(data) || data.length === 0) {
    return <NorecordsFound/>
  }

  const renderCell = (value, colName) => {
    // Plugin column
    if (colName === "plugin") {
      if (!value) return <NorecordsFound />;
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
      return <span className="text-gray-400 italic">No Plugin</span>;
    }

    // Curier Name
    if (colName === "curier_name") {
      if (!value || value === "") {
        return <NorecordsFound />;
      }
    }

    // Default rendering
    if (value === null || value === undefined) return "";
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
        <thead className="bg-gray-50 sticky top-0 z-20">
          <tr>
            {visibleColumns.map((col) => (
              <th
                key={col}
                className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase "
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
