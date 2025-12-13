// src/components/c6/GYInternationalProducts.jsx
import { useState } from 'react';
import { Search, X } from 'lucide-react'; 
// Removed: Facebook, Twitter, Linkedin, Share2 imports

import bearing from '../../assets/triple9/bearing.png';
import brake from '../../assets/triple9/brake.png';
import brakeshoe from '../../assets/triple9/brakeshoe.png';
import controller from '../../assets/triple9/controller.png';
import motor from '../../assets/triple9/motor.png';
import shockerplate from '../../assets/triple9/shockerplate.png';


const products = [
  {
    id: 1,
    name: 'BEARING',
    category: 'Bearing',
    modelNo: '112',
    voltage: 'Ipsum',
    current: 'Dolor',
    image: bearing,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptasSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptasSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas',
    weight: '2.5 kg',
    dimensions: '15 × 10 × 8 cm',
    material: 'Chrome Steel Alloy',
    warranty: '1 Year Manufacturer Warranty',
    tags: ['Bearing', 'E-Rickshaw Parts', 'Premium Quality']
  },
  {
    id: 2,
    name: 'BRAKE DRUM',
    category: 'Brake Drum',
    modelNo: '113',
    voltage: 'lpsum',
    current: 'Dolor',
    image: brake,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptasSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptasSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.',
    weight: '4.2 kg',
    dimensions: 'N/A', // Added missing field for consistency
    material: 'Cast Iron', // Added missing field for consistency
    warranty: '6 Months Warranty', // Added missing field for consistency
    tags: ['Brake System', 'Safety Components', 'Commercial Grade']
  },
  {
    id: 3,
    name: 'BRAKE SHOE',
    category: 'Brake Shoe',
    modelNo: '114',
    voltage: 'lpsum',
    current: 'Dolor',
    image: brakeshoe,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptasSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptasSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas',
    weight: '1.8 kg', // Added missing field for consistency
    dimensions: '20 × 8 × 6 cm', // Added missing field for consistency
    material: 'Composite Friction Material', // Added missing field for consistency
    warranty: '1 Year Warranty', // Added missing field for consistency
    tags: ['Brake Components', 'Safety First', 'Eco-Friendly']
  },
  {
    id: 4,
    name: 'CONTROLLER 48V 20A',
    category: 'Controller',
    modelNo: '114',
    voltage: 'Lpsum',
    current: 'Dolor',
    certification: 'CE & RoHS', // Added missing field for consistency
    image: controller,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptasSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptasSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas',
    weight: '1.2 kg', // Added missing field for consistency
    dimensions: '18 × 12 × 5 cm', // Added missing field for consistency
    material: 'ABS Plastic Housing', // Added missing field for consistency
    warranty: '2 Year Warranty', // Added missing field for consistency
    tags: ['Electronic Controller', 'Smart Control', 'Energy Efficient'] // Added missing field for consistency
  },

  {
    id: 8,
    name: 'HYDRAULIC SHOCKERS',
    category: 'Suspension', // Corrected category from 'Bearing'
    modelNo: '114',
    voltage: 'lpsum',
    current: 'Dolor',
    certification: 'CSA Approved', // Added missing field for consistency
    image: shockerplate,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptasSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptasSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas',
    weight: '3.2 kg per pair', // Added missing field for consistency
    dimensions: '45 × 8 × 8 cm', // Added missing field for consistency
    material: 'Steel with Chrome Coating', // Added missing field for consistency
    warranty: '1 Year Warranty', // Added missing field for consistency
    tags: ['Suspension', 'Comfort', 'Hydraulic System'] // Added missing field for consistency
  },
  {
    id: 9,
    name: 'Motor',
    category: 'Accessories', // Corrected category from 'Controller'
    modelNo: '120',
    voltage: 'lpsum',
    current: 'Dolor',
    certification: 'TUV Certified',
    image: motor,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptasSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptasSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas',
    weight: '0.6 kg per set', // Added missing field for consistency
    dimensions: '25 × 15 × 8 cm', // Added missing field for consistency
    material: 'ABS Frame with Glass', // Added missing field for consistency
    warranty: '6 Months Warranty', // Added missing field for consistency
    tags: ['Safety Accessories', 'Visibility', 'Adjustable'] // Added missing field for consistency
  },
];

// Dynamically extract unique categories from products
const allCategories = products.map(p => p.category);
const categories = [...new Set(allCategories)];

const Triple9 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(categories);
  const [sortBy, setSortBy] = useState('latest');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('description');

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
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });


  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            {/* Search */}
            <div className="bg-white rounded border border-gray-300 mb-4">
              <div className="flex items-center p-2 border-b border-gray-300">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 outline-none text-sm"
                />
                <Search className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded border border-gray-300 mb-4 p-4">
              <h3 className="font-bold text-lg mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, idx) => (
                  <label key={idx} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="w-4 h-4 accent-red-600"
                    />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* New Header Added */}
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Triple9 Products</h1>
            {/* Sort By */}
            <div className="flex justify-end mb-4">
              <select
                className="border border-gray-300 rounded px-3 py-1 text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="latest">Sort By Latest</option>
                <option value="name">Sort By Name</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-3 gap-6">
              {sortedProducts.length > 0 ? (
                sortedProducts.map((product, idx) => (
                  <div key={idx} className="bg-white rounded shadow">
                    <div className="relative bg-gray-100 aspect-square flex items-center justify-center p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <div className="font-bold text-red-600 text-lg mb-1">TRIPLE9</div>
                      <div className="text-xs text-gray-600 mb-2">{product.category.toUpperCase()}</div>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full bg-red-600 text-white py-2 text-sm font-semibold rounded hover:bg-red-700 transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-8">
                {/* Left Column - Images */}
                <div>
                  <div className="bg-gray-100 rounded-lg p-8 mb-4">
                    <div className="aspect-square bg-white rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div>
                  
                  <p className="text-gray-700 mb-6">
                    {selectedProduct.description}
                  </p>

                  <div className="border-t border-gray-200 pt-4 mb-6 space-y-2">
                    <div className="flex">
                      <span className="font-semibold w-40">Model No.:</span>
                      <span>{selectedProduct.modelNo}</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold w-40">Brand:</span>
                      <span>Triple9</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold w-40">Voltage:</span>
                      <span>{selectedProduct.voltage}</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold w-40">Current:</span>
                      <span>{selectedProduct.current}</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold w-40">Certification:</span>
                      <span>{selectedProduct.certification}</span>
                    </div>
                  </div>

                  <div className="flex gap-3 mb-6">
                    <button className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700">
                      Inquire Now
                    </button>
                    <button className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700">
                      Call Now
                    </button>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="mb-2">
                      <span className="font-semibold">Categories:</span>
                      <span className="ml-2 text-gray-700">{selectedProduct.category}</span>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Tags:</span>
                      <span className="ml-2 text-gray-700">{selectedProduct.tags && selectedProduct.tags.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs Section */}
              <div className="mt-8 border-t border-gray-200">
                <div className="flex gap-8 border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`py-3 px-4 font-semibold ${
                      activeTab === 'description'
                        ? 'text-red-600 border-b-2 border-red-600'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab('additional')}
                    className={`py-3 px-4 font-semibold ${
                      activeTab === 'additional'
                        ? 'text-red-600 border-b-2 border-red-600'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Additional Information
                  </button>
                </div>

                <div className="py-6">
                  {activeTab === 'description' ? (
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex">
                        <span className="font-semibold w-48">Weight:</span>
                        <span>{selectedProduct.weight}</span>
                      </div>
                      <div className="flex">
                        <span className="font-semibold w-48">Dimensions:</span>
                        <span>{selectedProduct.dimensions}</span>
                      </div>
                      <div className="flex">
                        <span className="font-semibold w-48">Material:</span>
                        <span>{selectedProduct.material}</span>
                      </div>
                      <div className="flex">
                        <span className="font-semibold w-48">Warranty:</span>
                        <span>{selectedProduct.warranty}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Triple9;