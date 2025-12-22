const DataTable = ({ data }) => {
    // console.log(data);
    
    // Safety check
    if (!Array.isArray(data) || data.length === 0) {
        return (
            <p className="text-center text-gray-500 py-10">
                No records found
            </p>
        );
    }

    // column names from first row dynamically
    const columns = Object.keys(data[0]);
   
    const renderCell = (value) => {
        // null / undefined 
        if (value === null || value === undefined) return "";

        // string with HTML → render as HTML
        if (typeof value === "string" && value.includes("<")) {
            return <span dangerouslySetInnerHTML={{ __html: value }} />;
        }

        // object → JSON.stringify, but nicer format
        if (typeof value === "object") {
            return value.short_url || JSON.stringify(value);
        }

        return value;
    };


    return (
        <div className="relative overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
                {/* Table Header */}
                <thead className="bg-gray-50 sticky top-0 z-10">
                    <tr>
                        {columns?.map((col) => (
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
                        <tr
                            key={rowIndex}
                            className="hover:bg-gray-50 transition-colors duration-150"
                        >
                            {columns?.map((col) => (
                                <td
                                    key={col}
                                    className="px-4 py-2 text-sm text-gray-800 whitespace-normal"
                                >
                                    {renderCell(row[col])}
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
