import { Zap, Shield, Sparkles, Award, TrendingUp, Users, Star } from 'lucide-react';
const Company1 = () => {
  const kg = '/ElonBhaii.webp';
  const features = [
    { icon: <Shield className="w-6 h-6" />, title: "Advanced BMS", desc: "Smart Battery Protection" },
    { icon: <Zap className="w-6 h-6" />, title: "1000W Power", desc: "Powerful Motor" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "80-100 KM", desc: "Long Mileage" },
    { icon: <Award className="w-6 h-6" />, title: "24/7 Support", desc: "Instant Service" }
  ];

  const stats = [
    { number: "500+", label: "Dealer Network", icon: <Users className="w-8 h-8" /> },
    { number: "15,000+", label: "Units Sold", icon: <TrendingUp className="w-8 h-8" /> },
    { number: "98%", label: "Customer Satisfaction", icon: <Star className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100">
      <header
        className="relative bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 text-white py-24 px-4 shadow-2xl overflow-hidden"
        // style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute inset-0 bg-green-600 opacity-10 animate-pulse"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 animate-bounce">
            <Sparkles className="w-12 h-12 text-green-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">
            SHRI SHYAM ENTERPRISES
          </h1>
          <p className="text-xl md:text-2xl text-green-300 font-light">TORA E-SCOOTY - Ride of the Future</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 -mt-12 mb-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-green-600">{feature.icon}</div>
                <div>
                  <div className="font-bold text-sm text-gray-800">{feature.title}</div>
                  <div className="text-xs text-gray-600">{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 group">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-green-300 to-green-500 shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white group-hover:scale-105 transition-transform duration-300">
                <img src={kg} alt="Logo" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">
                Shri Shyam Enterprises
              </h2>
              <p className="text-xl text-green-600 font-semibold mb-4">
                Founder & CEO
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Shri Shyam Enterprises, through its flagship brand TORA E-SCOOTY, is writing a new chapter in India's electric two-wheeler industry. We specialize in e-scooter manufacturing, international imports, wholesale distribution, and dealership network expansion.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="text-gray-600 italic">
                  "For us, success is not just about earning profits, but about creating sustainable value for people and the environment."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6 text-center">
          Leadership – Mr. Ravi Kumar
        </h2>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Shri Shyam Enterprises operates under the experienced leadership of Mr. Ravi Kumar. Under his guidance, the TORA brand has achieved remarkable popularity and credibility in a very short time.
          </p>
          <p className="text-gray-600">
            <strong className="text-green-700">Experience:</strong> Mr. Kumar brings 15+ years of experience and has successfully established the company in export markets as well.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white text-center hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              <div className="flex justify-center mb-4 opacity-80">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-green-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To provide India with accessible, affordable, and eco-friendly electric mobility solutions, and to make TORA the most trusted and preferred e-scooter brand in the country. Every TORA model is designed keeping in mind Indian roads, weather conditions, and user requirements—to make daily commutes safer, more comfortable, and smarter.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center">
          Core Capabilities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6" /> TORA Brand
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>State-of-the-art Battery Management System (BMS)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>High-torque powerful motor up to 1000W</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>80-100 kilometers long mileage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Hydraulic suspension system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>24/7 helpline and fast service</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6" /> OEM Manufacturing Services
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>End-to-end design and manufacturing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Multi-level quality testing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>IoT integration and latest technology</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Modern factory located in Uttar Pradesh</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center">
          Partnership Opportunities (Dealership & Partnerships)
        </h2>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12 border-2 border-green-300 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-green-800 mb-6">
            TORA Dealership - Your Success Partner
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-green-700 mb-3">💰 High Profit Margin</h4>
              <p className="text-gray-600 text-sm">Attractive profits up to 20-30%</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-green-700 mb-3">🚀 Fast Sales</h4>
              <p className="text-gray-600 text-sm">Rapidly selling models in the market</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-green-700 mb-3">📱 Marketing Support</h4>
              <p className="text-gray-600 text-sm">Digital promotion and branding</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-green-700 mb-3">⚡ Fast Delivery</h4>
              <p className="text-gray-600 text-sm">Timely stock and service support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-gray-800 to-green-800 text-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-green-300">Company:</span>
                  <span>Shri Shyam Enterprises</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-green-300">Brand:</span>
                  <span>TORA E-SCOOTY</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-green-300">Proprietor:</span>
                  <span>Mr. Ravi Kumar</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-green-300">Office:</span>
                  <span>Gupthal Road, Chandausi<br />Sambhal, Uttar Pradesh – 244412</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-green-300">Contact:</span>
                  <a href="tel:895646497" className="hover:text-green-300 transition-colors">895646497</a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-green-300">Email:</span>
                  <a href="mailto:krishnagroup@gmail.com" className="hover:text-green-300 transition-colors">krishnagroup@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8 text-center">
            Our Key Features
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-red-600 mb-3">1. High-Quality Manufacturing</h3>
              <p className="text-gray-700 leading-relaxed">
                Our Tora E-Scooty is built with modern technology and premium materials, ensuring long life and excellent performance. We are ISO 9001 certified.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-red-600 mb-3">2. Powerful Battery Performance</h3>
              <p className="text-gray-700 leading-relaxed">
                We offer advanced Lithium and Lead-Acid options, delivering fast charging, long range, and excellent backup. Lithium batteries are imported from China.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-red-600 mb-3">3. Adherence to Safety Standards</h3>
              <p className="text-gray-700 leading-relaxed">
                Every scooter undergoes rigorous quality tests to ensure customers receive safe and reliable vehicles. This includes an ABS brake system.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-red-600 mb-3">4. Eco-Friendly Technology</h3>
              <p className="text-gray-700 leading-relaxed">
                Moving towards a pollution-free future, we create eco-friendly and energy-efficient models with zero-emission technology.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-red-600 mb-3">5. Advanced Technical Features</h3>
              <p className="text-gray-700 leading-relaxed">
                Features like GPS, digital meter, smart locking system make our modern models even smarter, including mobile app connectivity.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-red-600 mb-3">6. Excellent After-Sales Support</h3>
              <p className="text-gray-700 leading-relaxed">
                We focus on service along with sales, ensuring customers receive proper support at every stage. Our service centers are spread across India.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-red-600 mb-3">7. International Exports</h3>
              <p className="text-gray-700 leading-relaxed">
                Besides India, we successfully export our products to countries like Nepal, Bhutan, Bangladesh, and Sri Lanka. Our quality meets international standards, earning us trust and popularity in foreign markets. Last year, we exported 2000+ units.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center">
            📸 Photo Gallery
          </h2>
          <p className="text-center text-gray-600 mb-8">Our TORA E-SCOOTY models and features</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <div className="aspect-square bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Zap className="w-12 h-12 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold">TORA Model {item}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-green-700 mb-3">🏭 Our Manufacturing Unit</h3>
              <div className="aspect-video bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg flex items-center justify-center">
                <Shield className="w-16 h-16 text-white" />
              </div>
              <p className="text-gray-600 mt-3 text-sm">Modern factory located in Uttar Pradesh</p>
            </div>


          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-gray-400">© 2025 Shri Shyam Enterprises - TORA E-SCOOTY</p>
        <p className="text-green-400 mt-2">Green Ride of the Future</p>
      </footer>
    </div>
  );
};

export default Company1;