import { useState } from 'react';

const productsByCategory = {
  "L5 Motor": [
    {
      id: 1,
      image: 'https://productimages.withfloats.com/actual/5f92c36def02f300014f2fc0.jpg',
      caption: 'CY Gold L-5 Kit MCD Kit',
      brand: 'CY'
    },
    {
      id: 2,
      image: 'https://productimages.withfloats.com/actual/5f92c3d0310875000192e4d0.jpg',
      caption: 'CY Gold L-5 Motor',
      brand: 'CY'
    }
  ],
  "E-Rickshaw": [
    {
      id: 3,
      image: 'https://productimages.withfloats.com/actual/5f92b9d373136f0001e775e5.jpg',
      caption: 'BLDC Motor -GYM -A1-120',
      brand: 'GY'
    },
    {
      id: 4,
      image: 'https://productimages.withfloats.com/actual/5f92bef473136f0001e776b5.jpg',
      caption: 'CY Gold Motor & Controller',
      brand: 'CY'
    },
    {
      id: 5,
      image: 'https://productimages.withfloats.com/actual/5f92c00a34328d0001a546d4.jpg',
      caption: 'CY Gold Platinium Motor & Controller',
      brand: 'CY'
    }
  ],
  "Motor": [
    {
      id: 6,
      image: 'https://productimages.withfloats.com/actual/5f92b9d373136f0001e775e5.jpg',
      caption: 'BLDC Motor -GYM -A1-120',
      brand: 'GY'
    },
    {
      id: 7,
      image: 'https://productimages.withfloats.com/actual/5f92bbb358722a0001650f48.jpg',
      caption: 'Balance Rod',
      brand: 'CY'
    }
  ],
  "Washer": [
    {
      id: 8,
      image: 'https://productimages.withfloats.com/actual/5fa14ffd2dba940001c83dcd.jpg',
      caption: 'BLC Motor -GYM -',
      brand: 'GY'
    },
    {
      id: 9,
      image: 'https://productimages.withfloats.com/actual/5f967d71310875000193288a.jpg',
      caption: 'Rear Axle Washer',
      brand: 'CY'
    },
    {
      id: 10,
      image: 'https://productimages.withfloats.com/actual/5fa14ffd2dba940001c83dcd.jpg',
      caption: 'BLC Motor -GYM -',
      brand: 'GY'
    },
    {
      id: 11,
      image: 'https://productimages.withfloats.com/actual/5f967d71310875000193288a.jpg',
      caption: 'Rear Axle Washer',
      brand: 'CY'
    },
    {
      id: 12,
      image: 'https://productimages.withfloats.com/actual/5f969aff3108750001932d53.jpg',
      caption: 'Mudguard Nut',
      brand: 'GY'
    },
    {
      id: 13,
      image: 'https://productimages.withfloats.com/actual/5f969bcfe235d900018dda85.jpg',
      caption: 'Gear Box',
      brand: 'CY'
    }
  ],
  "GY": [
    {
      id: 14,
      image: 'https://productimages.withfloats.com/actual/5faa77318518b4000138e425.jpg',
      caption: 'MCB Transparent',
      brand: 'GY'
    },
    {
      id: 15,
      image: 'https://productimages.withfloats.com/actual/5faa79b348b37b0001c1d3a9.jpg',
      caption: 'Speed Meter',
      brand: 'GY'
    }
  ]
};

const GYInternationalProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  
  const categories = ['all', ...Object.keys(productsByCategory)];
  const brands = ['all', 'CY', 'GY'];

  const allProducts = Object.entries(productsByCategory).flatMap(([cat, prods]) => 
    prods.map(p => ({ ...p, category: cat }))
  );

  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;
    return categoryMatch && brandMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50"> 
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
              <span className="text-white text-sm font-semibold tracking-wide">PREMIUM QUALITY</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              CY & GY <span className="text-yellow-300">Products</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              High-performance electric vehicle components & industrial motors
            </p>
          </div>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-3 justify-center mb-4">
          <div className="text-gray-600 text-sm font-semibold flex items-center mr-2">
            Brand:
          </div>
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedBrand === brand
                  ? brand === 'CY' 
                    ? 'bg-gradient-to-r from-yellow-600 to-amber-600 text-white shadow-lg shadow-yellow-500/50 scale-105'
                    : brand === 'GY'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/50 scale-105'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-300'
              }`}
            >
              {brand === 'all' ? 'All Brands' : `${brand} Product`}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-3 justify-center">
          <div className="text-gray-600 text-sm font-semibold flex items-center mr-2">
            Category:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-300'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16 pt-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Category & Brand Badge */}
                <div className="absolute top-3 left-3 z-10 flex gap-2">
                  <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                    <span className="text-xs font-semibold text-blue-600">{product.category}</span>
                  </div>
                  <div className={`px-3 py-1 backdrop-blur-sm rounded-full border shadow-sm ${
                    product.brand === 'CY' 
                      ? 'bg-yellow-100/90 border-yellow-300'
                      : 'bg-green-100/90 border-green-300'
                  }`}>
                    <span className={`text-xs font-semibold ${
                      product.brand === 'CY' ? 'text-yellow-700' : 'text-green-700'
                    }`}>
                      {product.brand}
                    </span>
                  </div>
                </div>

                {/* Product Image */}
                <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-end justify-center pb-2">
                  <img
                    src={product.image}
                    alt={product.caption}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: 'center bottom' }}
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${
                      product.brand === 'CY' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <span className={`text-xs font-bold tracking-widest uppercase ${
                      product.brand === 'CY' ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {product.brand === 'CY' ? 'CY Gold' : 'GY Product'}
                    </span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-base leading-snug mb-4 line-clamp-2 min-h-[3rem]">
                    {product.caption}
                  </h3>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-gray-500 text-xs font-medium uppercase tracking-wide">Premium Quality</span>
                    <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors font-medium text-sm group-hover:gap-2">
                      View
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-500 text-lg">No products found with the selected filters</div>
            <button 
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBrand('all');
              }}
              className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GYInternationalProducts;