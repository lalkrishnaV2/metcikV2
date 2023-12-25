// Table.js
import React from "react";
import { useTable } from "react-table";

const MarketTable = ({ columns, data, tableHeader }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="overflow-x-auto md:w-full">
      <table {...getTableProps()} className="w-full border-collapse border">
        <thead>
          {tableHeader && (
            <tr key={tableHeader}>
              <th
                colSpan={columns.length}
                className="text-center align-middle p-4 bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 text-yellow-100"
                style={{ border: "none", fontSize: "1.5rem" }}
              >
                {tableHeader}
              </th>
            </tr>
          )}
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="border p-2 text-center align-middle"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border" key={tableHeader}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="border p-6">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MarketTable;
