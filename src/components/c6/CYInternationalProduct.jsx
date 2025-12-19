import { useState } from 'react';

const productsByCategory = {
  "L5 Motor": [
    {
      id: 1,
      image: 'https://productimages.withfloats.com/actual/5f92c36def02f300014f2fc0.jpg',
      caption: 'CY Gold L-5 Kit MCD Kit'
    },
    {
      id: 2,
      image: 'https://productimages.withfloats.com/actual/5f92c3d0310875000192e4d0.jpg',
      caption: 'CY Gold L-5 Motor'
    }
  ],
  "E-Rickshaw": [
    {
      id: 3,
      image: 'https://productimages.withfloats.com/actual/5f92b9d373136f0001e775e5.jpg',
      caption: 'BLDC Motor -GYM -A1-120'
    },
    {
      id: 4,
      image: 'https://productimages.withfloats.com/actual/5f92bef473136f0001e776b5.jpg',
      caption: 'CY Gold Motor & Controller'
    },
    {
      id: 4,
      image: 'https://productimages.withfloats.com/actual/5f92c00a34328d0001a546d4.jpg',
      caption: 'CY Gold Platinium Motor & Controller'
    }
  ],
  "Motor": [
    {
      id: 6,
      image: 'https://productimages.withfloats.com/actual/5f92b9d373136f0001e775e5.jpg',
      caption: 'BLDC Motor -GYM -A1-120'
    },
    {
      id: 7,
      image: 'https://productimages.withfloats.com/actual/5f92bbb358722a0001650f48.jpg',
      caption: 'Balance Rod'
    }
  ],
  "Washer": [
    {
      id: 8,
      image: 'https://productimages.withfloats.com/actual/5fa14ffd2dba940001c83dcd.jpg',
      caption: 'BLC Motor -GYM -'
    },
    {
      id: 9,
      image: 'https://productimages.withfloats.com/actual/5f967d71310875000193288a.jpg',
      caption: 'Rear Axle Washer'
    }
  ]
};

const CYInternationalProducts = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-gray-800 text-center">CY Gold Products</h1>
        
        {Object.entries(productsByCategory).map(([category, products]) => (
          <div key={category} className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-red-600 inline-block pb-2">
                {category}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative bg-gray-100 aspect-square flex items-center justify-center p-6">
                    <img
                      src={product.image}
                      alt={product.caption}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div className="font-bold text-red-600 text-xl mb-2">CY GOLD</div>
                    <div className="text-gray-700 text-base font-medium">{product.caption}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CYInternationalProducts;