// src/components/c6/common/TableHeader.jsx
import React from 'react';

const TableHeader = ({ headers }) => (
  <thead className="bg-gradient-to-r from-amber-100 to-amber-50">
    <tr>
      {headers.map((header) => (
        <th
          key={header}
          className="px-6 py-4 text-left text-xs font-bold text-amber-900 uppercase tracking-wider border-b-2 border-amber-200"
        >
          {header}
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;