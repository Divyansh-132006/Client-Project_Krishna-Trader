import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Play, Trophy, Users, Sparkles, X, Star, Video, Award, Camera } from 'lucide-react';


const seoData = {
  title: "Krishna Group Media Gallery | Awards, Team & Corporate Videos | Our Legacy in Motion",
  description: "Explore Krishna Group's achievements, leadership team, and corporate journey. View awards, certifications, and exclusive content showcasing 10+ years of excellence in e-mobility.",
  keywords: "Krishna Group awards, corporate achievements, leadership team, company videos, e-mobility achievements India",
  url: "https://www.krishnagroup.com/media"
};

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState('achievements');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const tabs = [
    { id: 'achievements', label: 'Achievements', icon: Trophy, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
    { id: 'members', label: 'Leadership Team', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    { id: 'videos', label: 'Corporate Videos', icon: Video, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  ];

  const achievements = [
    { id: 1, title: 'Corporate Excellence', category: 'Award', image: 'https://res.cloudinary.com/ddiyjetob/image/upload/v1767200139/kgmm_ejidlk_evmoav.jpg' },
    { id: 2, title: 'Innovation Milestone', category: 'Milestone', image: 'https://res.cloudinary.com/ddiyjetob/image/upload/v1767200139/kgm_kyffec_moze9j.jpg' },
  ];

  const members = [
    { id: 1, name: 'Mr. Ravi Kumar', position: 'Leader', specialty: 'Shri Shyam Enterprises', experience: '15+ Years', image: 'https://via.placeholder.com/400x400?text=Ravi+Kumar' },
    { id: 2, name: 'Mr. Prince Kumar Sharma', position: 'Leader', specialty: 'PRINCE GLOBAL COMPANY', experience: '12+ Years', image: 'https://via.placeholder.com/400x400?text=Prince+Kumar' },
    { id: 3, name: 'Mr. Satish Chandra Sharma', position: 'Leader', specialty: 'Krishna E-Rickshaw Enterprises', experience: '20+ Years', image: 'https://via.placeholder.com/400x400?text=Satish+Chandra' },
    { id: 4, name: 'Smt. Krishna Devi', position: 'Leader', specialty: 'Krishna E-Vehicle Traders', experience: 'Founder', image: 'https://via.placeholder.com/400x400?text=Krishna+Devi' },
    { id: 5, name: 'Mr. Krishna Mohan', position: 'Leader', specialty: 'Krishna Power Solution', experience: '10+ Years', image: 'https://via.placeholder.com/400x400?text=Krishna+Mohan' }
  ];

  const videos = [
    { id: 1, title: 'Krishna Group Journey', category: 'Corporate', thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', duration: '3:45', views: '25K', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 2, title: 'TORA Brand Launch', category: 'Launch', thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80', duration: '2:15', views: '12K', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.url} />
      </Helmet>

      <div className="absolute top-0 inset-x-0 h-[50vh] bg-gradient-to-b from-indigo-100/50 to-transparent -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        <header className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm rounded-full px-5 py-1.5 mb-6">
            <Sparkles className="text-indigo-500" size={16} />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Krishna Group Media Hub</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6">
            Our Legacy in <span className="text-indigo-600">Motion</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Witness the awards, the expertise, and the driving force behind India's e-mobility revolution.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 border ${isActive
                    ? `${tab.bg} ${tab.border} ${tab.color} shadow-lg scale-105`
                    : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                  }`}
              >
                <Icon size={20} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <main className="min-h-[500px]">

          {activeTab === 'achievements' && (
            <div className="grid md:grid-cols-2 gap-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {achievements.map((item) => (
                <div key={item.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <span className="text-white font-bold text-xl">{item.category}: {item.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'members' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {members.map((person) => (
                <div key={person.id} className="bg-white p-6 rounded-[2rem] border border-slate-200 text-center hover:border-blue-400 transition-all shadow-sm hover:shadow-xl group">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                    <img src={person.image} className="w-full aspect-square rounded-2xl object-cover relative z-10 border-4 border-white" alt={person.name} />
                  </div>
                  <h3 className="font-black text-lg text-slate-900 leading-tight">{person.name}</h3>
                  <p className="text-blue-600 text-sm font-bold mt-1 uppercase tracking-wider">{person.position}</p>
                  <p className="text-slate-400 text-[10px] font-bold mt-3 uppercase tracking-widest h-8">{person.specialty}</p>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <span className="bg-slate-100 px-4 py-1.5 rounded-full text-[10px] font-black text-slate-600 uppercase">Exp: {person.experience}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {videos.map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => setSelectedVideo(vid)}
                  className="group cursor-pointer bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:border-emerald-500 transition-all shadow-md"
                >
                  <div className="relative aspect-video">
                    <img src={vid.thumbnail} className="w-full h-full object-cover" alt={vid.title} />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/60 transition-all flex items-center justify-center">
                      <div className="bg-white text-emerald-600 p-5 rounded-full shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                        <Play size={28} className="fill-current" />
                      </div>
                    </div>
                    <span className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg font-bold">{vid.duration}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-black text-xl text-slate-900 line-clamp-1">{vid.title}</h4>
                      <Star className="text-emerald-500 w-5 h-5 fill-current" />
                    </div>
                    <div className="flex justify-between items-center text-xs text-slate-400 font-bold uppercase tracking-widest">
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/95 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all"
            >
              <X size={24} />
            </button>
            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src={selectedVideo.url}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-2xl font-black text-slate-900">{selectedVideo.title}</h3>
                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">{selectedVideo.category} Vertical • Official Presentation</p>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="w-full md:w-auto px-10 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-indigo-600 transition-all shadow-lg"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="py-20 text-center">
        <div className="flex justify-center gap-4 mb-6">
          <Award className="text-slate-300" />
          <Camera className="text-slate-300" />
          <Sparkles className="text-slate-300" />
        </div>
        <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em]">Krishna Group Media Repository © 2026</p>
      </footer>
    </div>
  );
};

export default MediaPage;