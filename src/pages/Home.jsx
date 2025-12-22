import React, { useState } from 'react';
import jsonData from '../data/data.json';
import DataTable from '../components/DataTable';

const Home = () => {
  const [searchField, setSearchField] = useState("sell_id");
  const [searchQuery, setSearchQuery] = useState("");

  // Helper: strip HTML tags for search
  const stripHTML = (str) => {
    if (!str) return "";
    return str.replace(/<[^>]+>/g, "");
  };

  // Filtered data
  const filteredData = jsonData.data.filter((row) => {
    let value = row[searchField];

    if (value === null || value === undefined) return false;

    // If object, stringify
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }

    // If string, strip HTML tags
    if (typeof value === "string") {
      value = stripHTML(value);
    }

    return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Dropdown options dynamically from first row
  const columns = Object.keys(jsonData.data[0]);

  return (
    <div className="p-4 space-y-4">
      {/* ===== Search Section ===== */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <select
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        >
          {columns?.map((col) => (
            <option key={col} value={col}>
              {col.replace(/_/g, " ")}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type to search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* ===== Data Table ===== */}
      <DataTable data={filteredData} />
    </div>
  );
};

export default Home;
