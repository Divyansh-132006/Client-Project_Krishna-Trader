import React, { useState, useMemo } from 'react';
import { Search, X, Info, Phone, Mail, Filter, Package, ChevronRight } from 'lucide-react';

// Assets
import bearing from '../../assets/triple9/bearing.png';
import brake from '../../assets/triple9/brake.png';
import brakeshoe from '../../assets/triple9/brakeshoe.png';
import controller from '../../assets/triple9/controller.png';
import motor from '../../assets/triple9/motor.png';
import shockerplate from '../../assets/triple9/shockerplate.png';

const PRODUCTS = [
  {
    id: 1,
    name: 'PREMIUM BEARING',
    category: 'Bearing',
    modelNo: 'TR-112',
    voltage: 'N/A',
    current: 'N/A',
    image: bearing,
    description: 'High-precision chrome steel bearings designed for high-speed rotation and durability. Featuring advanced sealing technology to prevent dust ingress, making it ideal for heavy-duty E-Rickshaw applications.',
    weight: '2.5 kg',
    dimensions: '15 × 10 × 8 cm',
    material: 'Chrome Steel Alloy',
    warranty: '1 Year Manufacturer Warranty',
    tags: ['Bearing', 'E-Rickshaw Parts', 'Premium Quality']
  },
  {
    id: 2,
    name: 'HEAVY DUTY BRAKE DRUM',
    category: 'Brake Drum',
    modelNo: 'TR-113',
    voltage: 'N/A',
    current: 'N/A',
    image: brake,
    description: 'Cast iron brake drums engineered for superior heat dissipation. Ensures consistent braking performance under heavy loads and minimizes wear on brake shoes.',
    weight: '4.2 kg',
    dimensions: 'Standard',
    material: 'Cast Iron',
    warranty: '6 Months Warranty',
    tags: ['Brake System', 'Safety Components', 'Commercial Grade']
  },
  {
    id: 3,
    name: 'BRAKE SHOE SET',
    category: 'Brake Shoe',
    modelNo: 'TR-114',
    voltage: 'N/A',
    current: 'N/A',
    image: brakeshoe,
    description: 'Non-asbestos composite friction material brake shoes. Designed for smooth engagement and high friction coefficient to ensure safety in all weather conditions.',
    weight: '1.8 kg',
    dimensions: '20 × 8 × 6 cm',
    material: 'Composite Friction Material',
    warranty: '1 Year Warranty',
    tags: ['Brake Components', 'Safety First', 'Eco-Friendly']
  },
  {
    id: 4,
    name: 'CONTROLLER 48V 20A',
    category: 'Controller',
    modelNo: 'CT-4820',
    voltage: '48V',
    current: '20A',
    certification: 'CE & RoHS',
    image: controller,
    description: 'Intelligent brushless motor controller with high efficiency. Features over-current protection, under-voltage protection, and thermal management for prolonged battery life.',
    weight: '1.2 kg',
    dimensions: '18 × 12 × 5 cm',
    material: 'Aluminum & ABS Housing',
    warranty: '2 Year Warranty',
    tags: ['Electronic Controller', 'Smart Control', 'Energy Efficient']
  },
  {
    id: 8,
    name: 'HYDRAULIC SHOCKERS',
    category: 'Suspension',
    modelNo: 'HS-999',
    voltage: 'N/A',
    current: 'N/A',
    certification: 'CSA Approved',
    image: shockerplate,
    description: 'Precision-tuned hydraulic shock absorbers for a smooth ride. High-strength steel construction with chrome coating for maximum corrosion resistance.',
    weight: '3.2 kg per pair',
    dimensions: '45 × 8 × 8 cm',
    material: 'Steel with Chrome Coating',
    warranty: '1 Year Warranty',
    tags: ['Suspension', 'Comfort', 'Hydraulic System']
  },
  {
    id: 9,
    name: 'BRUSHLESS MOTOR',
    category: 'Accessories',
    modelNo: 'M-120',
    voltage: '48V/60V',
    current: '30A',
    certification: 'TUV Certified',
    image: motor,
    description: 'High-torque brushless DC motor providing exceptional power-to-weight ratio. Built with high-grade copper windings and powerful magnets for industrial endurance.',
    weight: '0.6 kg per set',
    dimensions: '25 × 15 × 8 cm',
    material: 'ABS Frame with Glass',
    warranty: '6 Months Warranty',
    tags: ['Safety Accessories', 'Visibility', 'Adjustable']
  }
];

const Triple9 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('description');

  const categories = useMemo(() => [...new Set(PRODUCTS.map(p => p.category))], []);

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const filteredAndSortedProducts = useMemo(() => {
    return PRODUCTS
      .filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCat = selectedCategories.length === 0 || selectedCategories.includes(p.category);
        return matchesSearch && matchesCat;
      })
      .sort((a, b) => sortBy === 'name' ? a.name.localeCompare(b.name) : b.id - a.id);
  }, [searchTerm, selectedCategories, sortBy]);

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-stone-200 pb-8">
          <div>
            <h1 className="text-4xl font-black text-stone-900 tracking-tight">Triple9 <span className="text-red-600">Pro</span></h1>
            <p className="text-stone-500 mt-2 font-medium">Precision engineered components for the modern fleet.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Find parts..."
                className="pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none w-64 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              className="bg-white border border-stone-200 rounded-xl px-4 py-2.5 font-semibold text-stone-700 outline-none"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="latest">Latest Arrival</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-stone-900 font-bold mb-4">
                <Filter className="w-4 h-4 text-red-600" />
                <h3>Categories</h3>
              </div>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                      selectedCategories.includes(cat) 
                      ? 'bg-red-50 text-red-700 font-bold' 
                      : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {cat}
                    {selectedCategories.includes(cat) && <X className="w-3 h-3" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl text-white shadow-xl shadow-stone-200">
              <Package className="w-8 h-8 text-red-500 mb-4" />
              <h4 className="font-bold mb-1 text-sm uppercase tracking-widest">Global Support</h4>
              <p className="text-xs text-stone-400 leading-relaxed mb-4">Inquiry response within 24 hours for bulk orders.</p>
              <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg text-xs font-bold transition-colors">
               <a href="/contact">Contact Sales</a>
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredAndSortedProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="group bg-white rounded-3xl border border-stone-100 hover:border-red-200 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-stone-50 p-8 flex items-center justify-center relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-stone-500 uppercase">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-bold text-stone-900 group-hover:text-red-600 transition-colors leading-tight mb-2">
                      {product.name}
                    </h2>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-stone-400">MOD: {product.modelNo}</span>
                      <button 
                        onClick={() => setSelectedProduct(product)}
                        className="flex items-center gap-1 text-xs font-black text-stone-900 group-hover:gap-2 transition-all uppercase"
                      >
                        Details <ChevronRight className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-stone-200">
                <p className="text-stone-400 font-medium italic">No products match your current filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-[2rem] max-w-5xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            {/* Modal Image Area */}
            <div className="md:w-1/2 bg-stone-100 p-12 flex items-center justify-center relative">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 left-6 md:hidden p-2 bg-white rounded-full shadow-lg"
              >
                <X size={20} />
              </button>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-contain mix-blend-multiply" />
            </div>

            {/* Modal Content Area */}
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-red-600 text-xs font-black uppercase tracking-[0.2em] mb-2 block">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-3xl font-black text-stone-900 leading-none">{selectedProduct.name}</h2>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="hidden md:flex p-2 hover:bg-stone-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex gap-6 border-b border-stone-100 mb-6">
                {['description', 'specs'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-sm font-bold uppercase tracking-widest transition-all ${
                      activeTab === tab ? 'text-red-600 border-b-2 border-red-600' : 'text-stone-400'
                    }`}
                  >
                    {tab === 'description' ? 'Insights' : 'Technical'}
                  </button>
                ))}
              </div>

              <div className="min-h-[180px]">
                {activeTab === 'description' ? (
                  <p className="text-stone-600 leading-relaxed text-sm">{selectedProduct.description}</p>
                ) : (
                  <div className="grid grid-cols-1 gap-y-3">
                    <SpecRow label="Model Number" value={selectedProduct.modelNo} />
                    <SpecRow label="Material" value={selectedProduct.material} />
                    <SpecRow label="Warranty" value={selectedProduct.warranty} />
                    <SpecRow label="Voltage" value={selectedProduct.voltage} />
                    <SpecRow label="Certifications" value={selectedProduct.certification || 'N/A'} />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <button className="bg-stone-900 text-white flex items-center justify-center gap-2 py-4 rounded-2xl font-bold hover:bg-black transition-all">
                  <Mail className="w-4 h-4" /> Inquiry
                </button>
                <button className="bg-red-600 text-white flex items-center justify-center gap-2 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-500/20">
                  <Phone className="w-4 h-4" /> Call Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SpecRow = ({ label, value }) => (
  <div className="flex items-center justify-between py-2 border-b border-stone-50">
    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">{label}</span>
    <span className="text-sm font-semibold text-stone-800">{value}</span>
  </div>
);

export default Triple9;