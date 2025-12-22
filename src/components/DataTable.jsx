import React from 'react';

const DataTable = ({ tableData }) => {
    // console.log(tableData);
    const data = tableData.data;
    if (data || data.length === 0) return <p>No Data available</p>;
    const colums = Object.keys(data[0]);
    console.log(colums);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {/* table header  */}
                    </tr>
                </thead>
                <tbody>
                    {/* table rows  */}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;