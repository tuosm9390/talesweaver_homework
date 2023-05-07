'use client'

import { useState } from "react";

interface CalculateTableProps {
  name: string
  price: number
}

const CalculateTable: React.FC<CalculateTableProps> = ({
  name,
  price
}) => {
  const [number, setNumber] = useState(0)

  if (isNaN(number)) {
    setNumber(0)
  }

  return (
    <tr className="text-sm">
      <td className="px-1">
        {name}
      </td>
      <td className="px-1">
        <input
          type="number"
          min={0}
          className="w-16 bg-transparent border-[1px] border-slate-600 rounded-lg"
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </td>
      <td className="px-1 w-36 text-center">{(price * number).toLocaleString()}</td>
      <td className="px-1 w-36 text-center">{(price * number * 1.6).toLocaleString()}</td>
      <td className="px-1 w-36 text-center">{(price * number * 1.6 * 1.125).toLocaleString()}</td>
    </tr>
  );
}

export default CalculateTable;