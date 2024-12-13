import React from "react";

const CustomizedTable = ({
  columns,
  generateRows,
  data
}: {
  columns: { id: number; column: string; className?: string }[];
  generateRows: (item: any) => React.JSX.Element;
  data: any;
}) => {
  return (
    <table className="w-full">
      <thead className="bg-secondary text-textMuted ">
        <tr className="p-4 text-lg font-semibold ">
          {columns.map((column) => (
            <td className={column.className} key={column.id}>
              {column.column}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item: any) => generateRows(item))}</tbody>
    </table>
  );
};

export default CustomizedTable;
