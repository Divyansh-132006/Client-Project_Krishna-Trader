import React from 'react';
import { Zap } from 'lucide-react'; 

const ProductTable = ({ title, data, icon: Icon }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-teal-100 rounded-xl">
        <Icon className="w-6 h-6 text-teal-700" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
    </div>
    
    <div className="hidden md:block overflow-hidden rounded-2xl shadow-lg border border-slate-200">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-gradient-to-r from-teal-600 to-teal-700">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
              Segment
            </th>
            <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
              Brands
            </th>
            <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
              Key Advantages
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-100">
          {data.map((item, i) => (
            <tr key={i} className="hover:bg-teal-50 transition-colors">
              <td className="px-6 py-5 font-semibold text-slate-900">{item.segment}</td>
              <td className="px-6 py-5 text-teal-700 font-medium">{item.brands}</td>
              <td className="px-6 py-5 text-slate-600">{item.advantages}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="md:hidden space-y-4">
      {data.map((item, i) => (
        <div key={i} className="bg-white rounded-xl shadow-lg border border-slate-200 p-5 space-y-3">
          <div>
            <div className="text-xs font-bold text-teal-600 uppercase mb-1">Segment</div>
            <div className="font-semibold text-slate-900">{item.segment}</div>
          </div>
          <div>
            <div className="text-xs font-bold text-teal-600 uppercase mb-1">Brands</div>
            <div className="text-teal-700 font-medium">{item.brands}</div>
          </div>
          <div>
            <div className="text-xs font-bold text-teal-600 uppercase mb-1">Key Advantages</div>
            <div className="text-slate-600 text-sm leading-relaxed">{item.advantages}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductTable;