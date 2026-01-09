
import { useState } from 'react';
import { Search, Package, Filter } from 'lucide-react';

import Ballracer from '../../assets/bajaj/ballracer.png'
import BrakeDisc from '../../assets/bajaj/brakedisx.png'
import Brakecircle from '../../assets/bajaj/brakecircle.png'
import Camself from '../../assets/bajaj/camself.png'
import Curburator from '../../assets/bajaj/curburator.png'
import Curburotrr from '../../assets/bajaj/curburotrr.png'
import CDI from '../../assets/bajaj/CD.png'
import Breakdrum from '../../assets/bajaj/brakedrum.png'
import GearSwaft from '../../assets/bajaj/gearswaft.png'
import Fuel from '../../assets/bajaj/fuel.png'
import SelfArmature from '../../assets/bajaj/selfarmature.png'
import Engine from '../../assets/bajaj/enginevalve.png'

const products = [
  {
    id: 1,
    name: 'Ball Racer Set',
    category: 'Ball Racer Set',
    modelNo: 'BRS-101',
    price: 450,
    image: Ballracer,
  },
  {
    id: 2,
    name: 'Brake Disc Caliper',
    category: 'Brake System',
    modelNo: 'BDC-202',
    price: 850,
    image:  BrakeDisc,
  },
  {
    id: 3,
    name: 'Brake Disc Plate',
    category: 'Brake System',
    modelNo: 'BDP-203',
    price: 650,
    image: Brakecircle,
  },
  {
    id: 4,
    name: 'Cam Shaft Assembly',
    category: 'Engine Parts',
    modelNo: 'CSA-301',
    price: 1200,
    image: Camself,
  },
  {
    id: 5,
    name: 'Carburetor',
    category: 'Fuel System',
    modelNo: 'CARB-401',
    price: 950,
    image: Curburator,
  },
  {
    id: 6,
    name: 'Carburetor Repair Kit',
    category: 'Fuel System',
    modelNo: 'CRK-402',
    price: 350,
    image: Curburotrr,
  },
  {
    id: 7,
    name: 'CDI',
    category: 'Electrical',
    modelNo: 'CDI-501',
    price: 550,
    image: CDI,
  },
  {
    id: 8,
    name: 'Front Brake Drum',
    category: 'Brake System',
    modelNo: 'CS-601',
    price: 420,
    image: Breakdrum,
  },
  {
    id: 9,
    name: 'Fuel Injector',
    category: 'Engine Parts',
    modelNo: 'CLA-602',
    price: 1100,
    image: Fuel
  },
  {
    id: 10,
    name: 'Gear-Swaft',
    category: 'Transmission',
    modelNo: 'CP-603',
    price: 380,
    image: GearSwaft
  },
  {
    id: 11,
    name: 'Self-Armature',
    category: 'Engine Parts',
    modelNo: 'CRK-302',
    price: 780,
    image: SelfArmature
  },
  {
    id: 12,
    name: 'Engine Valve Set',
    category: 'Engine Parts',
    modelNo: 'CRS-303',
    price: 1450,
    image:Engine,
  },
 
];


const allCategories = [...new Set(products.map(p => p.category))];

const Bajaj = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(allCategories);
  const [sortBy, setSortBy] = useState('latest');
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Bajaj Auto Parts
              </h1>
              <p className="text-sm text-gray-600 mt-1">Premium Quality Spare Parts & Accessories</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold shadow-lg">
              <Package className="w-4 h-4" />
              <span>{sortedProducts.length} Products</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-72 flex-shrink-0 space-y-6">
            {/* Search */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
              <div className="flex items-center p-4 gap-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search parts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 outline-none text-sm placeholder-gray-400"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-lg text-gray-800">Categories</h3>
              </div>
              <div className="space-y-2">
                {allCategories.map((category, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-3 cursor-pointer hover:bg-blue-50 p-3 rounded-xl transition-all group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="w-4 h-4 accent-blue-600 cursor-pointer"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Need Help?</h3>
              <p className="text-sm text-blue-100 mb-4">
                Contact our experts for genuine Bajaj spare parts and accessories.
              </p>
              <button className="w-full bg-white text-blue-600 py-2 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                <a href="/contact">Contact Us</a>
              </button>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-600 text-sm">
                Showing <span className="font-semibold text-blue-600">{sortedProducts.length}</span> products
              </div>
              <select
                className="border border-gray-200 rounded-xl px-4 py-2 text-sm bg-white hover:border-blue-300 transition-colors outline-none cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="latest">Latest First</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>

            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    onMouseEnter={() => setHoveredCard(product.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
                  >
                    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-300 ${hoveredCard === product.id ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 font-medium">
                          Model: {product.modelNo}
                        </span>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors">
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Bajaj;