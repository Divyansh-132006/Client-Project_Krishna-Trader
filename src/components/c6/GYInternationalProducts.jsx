import React, { useState, useMemo } from 'react';
import { Package, Tag, Layers, RefreshCw, ChevronRight, Star } from 'lucide-react';

const productsByCategory = {
  "L5 Motor": [
    { id: 1, image: 'https://productimages.withfloats.com/actual/5f92c36def02f300014f2fc0.jpg', caption: 'CY Gold L-5 Kit MCD Kit', brand: 'CY' },
    { id: 2, image: 'https://productimages.withfloats.com/actual/5f92c3d0310875000192e4d0.jpg', caption: 'CY Gold L-5 Motor', brand: 'CY' }
  ],
  "E-Rickshaw": [
    { id: 3, image: 'https://productimages.withfloats.com/actual/5f92b9d373136f0001e775e5.jpg', caption: 'BLDC Motor -GYM -A1-120', brand: 'GY' },
    { id: 4, image: 'https://productimages.withfloats.com/actual/5f92bef473136f0001e776b5.jpg', caption: 'CY Gold Motor & Controller', brand: 'CY' },
    { id: 5, image: 'https://productimages.withfloats.com/actual/5f92c00a34328d0001a546d4.jpg', caption: 'CY Gold Platinium Motor & Controller', brand: 'CY' }
  ],
  "Motor": [
    { id: 6, image: 'https://productimages.withfloats.com/actual/5f92b9d373136f0001e775e5.jpg', caption: 'BLDC Motor -GYM -A1-120', brand: 'GY' },
    { id: 7, image: 'https://productimages.withfloats.com/actual/5f92bbb358722a0001650f48.jpg', caption: 'Balance Rod', brand: 'CY' }
  ],
  "Washer": [
    { id: 8, image: 'https://productimages.withfloats.com/actual/5fa14ffd2dba940001c83dcd.jpg', caption: 'BLC Motor -GYM -', brand: 'GY' },
    { id: 9, image: 'https://productimages.withfloats.com/actual/5f967d71310875000193288a.jpg', caption: 'Rear Axle Washer', brand: 'CY' },
    { id: 12, image: 'https://productimages.withfloats.com/actual/5f969aff3108750001932d53.jpg', caption: 'Mudguard Nut', brand: 'GY' },
    { id: 13, image: 'https://productimages.withfloats.com/actual/5f969bcfe235d900018dda85.jpg', caption: 'Gear Box', brand: 'CY' }
  ],
  "GY Special": [
    { id: 14, image: 'https://productimages.withfloats.com/actual/5faa77318518b4000138e425.jpg', caption: 'MCB Transparent', brand: 'GY' },
    { id: 16, image: 'https://productimages.withfloats.com/actual/5faa79b348b37b0001c1d3a9.jpg', caption: 'Speed Meter', brand: 'GY' },
    { id: 17, image: 'https://productimages.withfloats.com/actual/5f9698352b37d10001fca6f6.jpg', caption: 'Brake Shoe Spring', brand: 'GY' },
    { id: 18, image: 'https://productimages.withfloats.com/actual/5f96970e30a9fd00013f6cdc.jpg', caption: 'Break Shoe Patti', brand: 'GY' },
    { id: 19, image: 'https://productimages.withfloats.com/actual/5f96966ab75dd30001a60295.jpg', caption: 'Motor Shaft Lock', brand: 'GY' },
    { id: 15, image: 'https://productimages.withfloats.com/actual/5f9694b2c92a1b0001e44950.jpg', caption: 'Cluster Gear', brand: 'GY' }
  ]
};

const GYInternationalProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');

  const categories = useMemo(() => ['all', ...Object.keys(productsByCategory)], []);
  const brands = ['all', 'CY', 'GY'];

  const filteredProducts = useMemo(() => {
    const all = Object.entries(productsByCategory).flatMap(([cat, prods]) => 
      prods.map(p => ({ ...p, category: cat }))
    );
    return all.filter(p => 
      (selectedCategory === 'all' || p.category === selectedCategory) &&
      (selectedBrand === 'all' || p.brand === selectedBrand)
    );
  }, [selectedCategory, selectedBrand]);

  return (
    <div className="min-h-screen bg-[#fcfcfb]">
      <div className="relative bg-[#1a1a1a] py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-amber-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase">International Standard</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">
            CY <span className="text-amber-500">&</span> GY <span className="text-stone-400">Series</span>
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-sm md:text-base font-medium">
            Next-generation propulsion systems and precision mechanical components for high-efficiency electric transport.
          </p>
        </div>
      </div>

      <div className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center p-1 bg-stone-100 rounded-xl w-full md:w-auto">
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-xs font-bold transition-all uppercase tracking-wider ${
                    selectedBrand === b 
                    ? b === 'CY' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' 
                    : b === 'GY' ? 'bg-stone-900 text-white' 
                    : 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  {b === 'all' ? 'All Brands' : b}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
              <Layers className="w-4 h-4 text-stone-400 hidden md:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                    selectedCategory === cat
                    ? 'bg-stone-900 border-stone-900 text-white'
                    : 'bg-transparent border-stone-200 text-stone-500 hover:border-stone-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-black text-stone-400 uppercase tracking-[0.3em] flex items-center gap-2">
            <Package size={16} /> Catalogue Results ({filteredProducts.length})
          </h2>
          {selectedCategory !== 'all' && (
            <button 
              onClick={() => {setSelectedCategory('all'); setSelectedBrand('all');}}
              className="text-xs font-bold text-amber-600 flex items-center gap-1 hover:underline"
            >
              <RefreshCw size={12} /> Reset Filters
            </button>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-stone-50 rounded-[2rem] border-2 border-dashed border-stone-200">
            <Package className="w-12 h-12 text-stone-300 mx-auto mb-4" />
            <p className="text-stone-500 font-bold uppercase tracking-widest">No matching products found</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const isCY = product.brand === 'CY';

  return (
    <div className="group bg-white rounded-2xl border border-stone-200 hover:border-stone-900 transition-all duration-500 overflow-hidden flex flex-col">
      <div className="aspect-square bg-stone-50 p-6 relative overflow-hidden flex items-center justify-center">
        <div className={`absolute top-4 left-4 z-10 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter ${
          isCY ? 'bg-amber-400 text-black' : 'bg-stone-900 text-white'
        }`}>
          {product.brand} GOLD
        </div>
        <img
          src={product.image}
          alt={product.caption}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <Tag size={12} className="text-stone-400" />
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{product.category}</span>
        </div>
        <h3 className="text-stone-900 font-bold text-sm md:text-base leading-tight mb-4 flex-1">
          {product.caption}
        </h3>
        
        <button className="w-full py-3 bg-stone-50 hover:bg-stone-900 text-stone-900 hover:text-white rounded-xl text-xs font-black transition-all duration-300 flex items-center justify-center gap-2 group/btn">
          SPECIFICATIONS <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default GYInternationalProducts;