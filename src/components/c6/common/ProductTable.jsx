// src/components/c6/common/ProductTable.jsx
import React from 'react';
import TableHeader from './TableHeader';

const ProductTable = ({ data, title, emoji }) => (
  <section className="mb-12">
    <h3 className="text-2xl font-bold text-amber-700 mb-4 flex items-center gap-2">
      <span className="text-3xl">{emoji}</span>
      {title}
    </h3>
    <div className="overflow-x-auto rounded-xl shadow-lg border border-amber-200">
      <table className="min-w-full divide-y divide-amber-200">
        <TableHeader headers={['Brand', 'Specialization', 'Key Features']} />
        <tbody className="bg-white divide-y divide-gray-100">
          {data.map((item) => (
            <tr key={item.brand} className="hover:bg-amber-50 transition-colors">
              <td className="px-6 py-4 text-sm font-bold text-stone-900 whitespace-nowrap">
                {item.brand}
              </td>
              <td className="px-6 py-4 text-sm text-stone-700 whitespace-nowrap">
                {item.specialization}
              </td>
              <td className="px-6 py-4 text-sm text-stone-600">
                {item.features}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default ProductTable;