import React, { useState, useEffect } from 'react';
import { Play, Award, Users, Sparkles, Video, ArrowRight, Star, Trophy, Target, X } from 'lucide-react';

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState('achievements');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const tabs = [
    { id: 'achievements', label: 'Achievements', icon: Trophy, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
    { id: 'members', label: 'Our Team', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  ];


  const achievements = [
    { id: 1, title: '', category: '', description: '', image: 'https://res.cloudinary.com/ddiyjetob/image/upload/v1767200139/kgmm_ejidlk_evmoav.jpg', date: '',  },
    { id: 2, title: '', category: '', description: '', image: 'https://res.cloudinary.com/ddiyjetob/image/upload/v1767200139/kgm_kyffec_moze9j.jpg', date: ''},
  ];

  const members = [
    { id: 1, name: 'Mr. Ravi Kumar', position: 'Leader', specialty: 'Shri Shyam Enterprises', image: ''},
    { id: 2, name: 'Mr. Prince Kumar Sharma', position: 'Leader', specialty: 'PRINCE GLOBAL COMPANY', image: '',  },
    { id: 3, name: 'Mr. Satish Chandra Sharma', position: 'Leader', specialty: 'Krishna E-Rickshaw Enterprises', image: '',  },
    { id: 4, name: 'Mr.', position: 'Leader', specialty: 'Krishna Power Solution', image: '', },
    { id: 5, name: 'Smt. Krishna Devi', position: 'Leader', specialty: 'Krishna E-Vechils Traders', image: '', }
  ];

  const leadership = [
    // { id: 1, name: 'Krishna Mohan', position: 'Founder & Chairman', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', description: 'Visionary entrepreneur with 25+ years pioneering sustainable real estate development.', motto: 'Building Tomorrow, Today', stats: ['25+ Years', '200+ Projects'] },
    // { id: 2, name: 'Sunita Krishna', position: 'Co-Founder & MD', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80', description: 'Strategic leader specializing in business growth and sustainability initiatives.', motto: 'Excellence Through Innovation', stats: ['20+ Years', 'Sustainability Pioneer'] }
  ];

  const videos = [
    // { id: 1, title: 'Company Overview 2024', category: 'Corporate', thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80', duration: '3:45', views: '25K', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    // { id: 2, title: 'Construction Excellence', category: 'Projects', thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', duration: '5:20', views: '18K', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    // { id: 3, title: '25 Years of Journey', category: 'Story', thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', duration: '4:15', views: '32K', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    // { id: 4, title: 'Building Trust', category: 'Testimonials', thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', duration: '2:30', views: '15K', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">

      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-indigo-50/50 to-transparent -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        
        <header className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm rounded-full px-5 py-1.5 mb-6">
            <Sparkles className="text-indigo-500" size={16} />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Corporate Media Hub</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Our Legacy in <span className="text-indigo-600">Motion</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover the stories, the people, and the milestones that define the Krishna Group's commitment to excellence.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 border ${
                  isActive 
                  ? `${tab.bg} ${tab.border} ${tab.color} shadow-sm` 
                  : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        
        <main className="min-h-[400px]">
          {activeTab === 'achievements' && (
            <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {achievements.map((item) => (
                <div key={item.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img src={item.image} alt="" className="w-full h-full  group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  {/* <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-bold rounded-full border border-amber-100">{item.category}</span>
                      <span className="text-sm text-slate-400 font-medium">{item.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-800">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div> */}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'members' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {members.map((person) => (
                <div key={person.id} className="bg-white p-4 rounded-3xl border border-slate-200 text-center hover:border-blue-300 transition-colors shadow-sm">
                  <img src={person.image} className="w-32 h-32 rounded-2xl mx-auto object-cover mb-4" alt="" />
                  <h3 className="font-bold text-lg text-slate-800">{person.name}</h3>
                  <p className="text-blue-600 text-sm font-semibold mb-2">{person.position}</p>
                  <p className="text-slate-500 text-xs mb-4">{person.specialty}</p>
                  <div className="flex justify-center gap-2">
                    <span className="bg-slate-100 px-3 py-1 rounded-lg text-[10px] font-bold text-slate-600 uppercase tracking-tighter">{person.experience}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'leadership' && (
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-in fade-in duration-500">
              {leadership.map((leader) => (
                <div key={leader.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-6 mb-6">
                    <img src={leader.image} className="w-24 h-24 rounded-2xl object-cover shadow-inner" alt="" />
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">{leader.name}</h3>
                      <p className="text-purple-600 font-semibold">{leader.position}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 italic mb-6">"{leader.motto}"</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{leader.description}</p>
                  <div className="flex gap-3">
                    {leader.stats.map((s, i) => (
                      <span key={i} className="bg-purple-50 text-purple-700 px-4 py-2 rounded-xl text-xs font-bold border border-purple-100">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {videos.map((vid) => (
                <div 
                  key={vid.id} 
                  onClick={() => setSelectedVideo(vid)}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-400 transition-all shadow-sm"
                >
                  <div className="relative aspect-video">
                    <img src={vid.thumbnail} className="w-full h-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                      <div className="bg-white/90 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                        <Play size={20} className="text-emerald-600 fill-emerald-600" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded font-bold">{vid.duration}</span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-slate-800 line-clamp-1 mb-1">{vid.title}</h4>
                    <div className="flex justify-between items-center text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                      <span>{vid.category}</span>
                      <span>{vid.views} Views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <div className="aspect-video bg-black">
              <iframe className="w-full h-full" src={selectedVideo.url} title="video" frameBorder="0" allowFullScreen />
            </div>
            <div className="p-6 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{selectedVideo.title}</h3>
                <p className="text-sm text-slate-500">{selectedVideo.category} • {selectedVideo.views} views</p>
              </div>
              <button onClick={() => setSelectedVideo(null)} className="px-6 py-2 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaPage;