// import React, { lazy, useState } from 'react';
// import { Download, ExternalLink, Play, Calendar, FileText } from 'lucide-react';

// export default function MediaPage() {
//     const [selectedMedia, setSelectedMedia] = useState(null);

//     const mediaItems = [
//         {
//             id: 1,
//             type: 'image',
//             thumbnail: 'https://res.cloudinary.com/prod/image/upload/c_pad,ar_1:1,g_center,b_gen_fill/me/genfill-nature-1',
//             title: 'Product Launch Event 2024',
//             description: 'Highlights from our annual product showcase'
//         },
//         {
//             id: 2,
//             type: 'image',
//             thumbnail: 'https://res.cloudinary.com/prod/image/upload/c_pad,ar_1:1,g_center,b_gen_fill/me/genfill-nature-1',
//             title: 'Product Launch Event 2024',
//             description: 'Highlights from our annual product showcase'
//         },
//         {
//             id: 3,
//             type: 'image',
//             thumbnail: 'https://res.cloudinary.com/prod/image/upload/c_pad,ar_1:1,g_center,b_gen_fill/me/genfill-nature-1',
//             title: 'Product Launch Event 2024',
//             description: 'Highlights from our annual product showcase'
//         },
//     ];

//     const pressReleases = [
//         {
//             date: 'October 15, 2024',
//             headline: 'Company Announces Strategic Partnership with Global Tech Leader',
//             summary: 'Partnership aims to accelerate digital transformation initiatives and expand market reach across three continents.',
//             link: '#'
//         },
//     ];

//     const articles = [
//         {
//             title: 'The Future of Digital Transformation in 2025',
//             description: 'Exploring emerging trends and technologies that will shape business operations in the coming year.',
//             date: 'October 20, 2024',
//             readTime: '8 min read',
//             link: '#'
//         },
//     ];

//     const downloadableAssets = [
//         {
//             title: 'Company Brochure 2024',
//             description: 'Complete overview of our products, services, and company vision.',
//             fileSize: '2.4 MB',
//             format: 'PDF'
//         },
//     ];

//     return (
//         <div className="min-h-screen bg-black">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

//                 <section className="mb-24">
//                     <div className="mb-12">
//                         <h2 className="text-4xl font-bold text-white mb-4">Media Gallery</h2>
//                         <p className="text-gray-400 text-lg">Explore our visual stories and creative moments</p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {mediaItems.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="group relative bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all duration-300 cursor-pointer"
//                                 onClick={() => setSelectedMedia(item)}
//                             >
//                                 <div className="relative h-56 overflow-hidden">
//                                     <img
//                                         loading={lazy}
//                                         src={item.thumbnail}
//                                         alt={item.title}
//                                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                                     />
//                                     {item.type === 'video' && (
//                                         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                                             <div className="bg-white rounded-full p-4">
//                                                 <Play className="w-8 h-8 text-black" fill="currentColor" />
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <div className="p-6">
//                                     <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
//                                     <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 <section className="mb-24">
//                     <div className="mb-12">
//                         <h2 className="text-4xl font-bold text-white mb-4">Press Releases</h2>
//                         <p className="text-gray-400 text-lg">Latest announcements and company updates</p>
//                     </div>

//                     <div className="space-y-6">
//                         {pressReleases.map((release, index) => (
//                             <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-zinc-700 transition-all duration-300">
//                                 <div className="flex items-start justify-between">
//                                     <div className="flex-1">
//                                         <div className="flex items-center text-sm text-gray-500 mb-3">
//                                             <Calendar className="w-4 h-4 mr-2" />
//                                             {release.date}
//                                         </div>
//                                         <h3 className="text-2xl font-bold text-white mb-4">{release.headline}</h3>
//                                         <p className="text-gray-400 mb-6 leading-relaxed">{release.summary}</p>
//                                         <a
//                                             href={release.link}
//                                             className="inline-flex items-center text-white hover:text-gray-300 font-medium transition-colors duration-200"
//                                         >
//                                             Read full release
//                                             <ExternalLink className="w-4 h-4 ml-2" />
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 <section className="mb-20">
//                     <div className="mb-12">
//                         <h2 className="text-4xl font-bold text-white mb-4">Downloadable Assets</h2>
//                         <p className="text-gray-400 text-lg">Access our comprehensive resources and documentation</p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         {downloadableAssets.map((asset, index) => (
//                             <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-zinc-700 transition-all duration-300">
//                                 <div className="flex items-start justify-between mb-6">
//                                     <div className="flex-1">
//                                         <h3 className="text-xl font-bold text-white mb-3">{asset.title}</h3>
//                                         <p className="text-gray-400 text-sm mb-4 leading-relaxed">{asset.description}</p>
//                                         <div className="flex items-center text-xs text-gray-500">
//                                             <span className="bg-zinc-800 px-3 py-1 rounded-full mr-3">{asset.format}</span>
//                                             <span>{asset.fileSize}</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <button className="w-full bg-white hover:bg-gray-200 text-black font-semibold py-4 px-4 rounded-lg flex items-center justify-center transition-colors duration-200">
//                                     <Download className="w-5 h-5 mr-2" />
//                                     Download Asset
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// }

const MediaPage = () =>{
    return(
        <div className="border-4 mt-4 rounded-4xl ml-4 mr-4">

        <h1 className="text-4xl text-black m-12 pt-6 py-6 text-center">Page Under Development and Maintenance</h1>
        </div>
    )
}

export default MediaPage