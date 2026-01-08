import React from 'react';
import { BatteryCharging, Battery, Wrench, Shield } from 'lucide-react';
import ImageHandler from '../../hooks/imagehandler';

const modelData = {
  "Accelerelo X-Pro": {
    payload: "150 KG", 
    brakes: "FRONT / REAR DISC DUAL PISTON 180", 
    chargeTimes: {
      leadAcid: "6-8 Hrs", 
      lfp: "3-4 Hrs", 
    },
    batteries: [
      { type: "Lead Acid", ranges: ["54KM II 60V28AH", "62KM II 72V 28AH", "61 KM II 60V32AH", "71 KM II 72V32AH"] }, 
      { type: "LFP Battery", ranges: ["59KM II 60V24AH", "73KM II 60V30AH"] }, 
      { type: "NMC Battery", ranges: ["61 KM II 60V24AH", "73KM II 60V30AH", "85KM II 60V34AH", "134KM II 60V55AH", "83KM II 72V30AH", "110KM II 72V40AH"] }
    ]
  },
  "Accelerelo R14": {
    payload: "150 KG", 
    brakes: "FRONT / REAR DISC DUAL PISTON 180", 
    chargeTimes: {
      leadAcid: "6-8 Hrs", 
      lfp: "3-4 Hrs", 
    },
    batteries: [
      { type: "Lead Acid", ranges: ["45KM II 48VV28AH", "55KM II 60V 28AH", "51KM II 48V32AH", "63KM II 60V32AH"] }, 
      { type: "LFP Battery", ranges: ["60KM II 60V24AH", "79KM II 60V30AH", "92KM II 60V34AH", "145KM II 60V55AH"] }, 
      { type: "NMC Battery", ranges: ["66 KM II 60V24AH", "79KM II 60V20AH", "92KM II 60V34AH", "145KM II 60V55AH", "93KM II 72V30AH", "124KM II 72V40AH"] }
    ]
  },
  "Accelerelo +": {
    payload: "150 KG", 
    brakes: "FRONT / REAR DISC DUAL PISTON 180", 
    chargeTimes: {
      leadAcid: "6-8 Hrs", 
      lfp: "3-4 Hrs", 
    },
    batteries: [
      { type: "Lead Acid", ranges: ["45KM II 48VV28AH", "55KM II 60V 28AH", "51KM II 48V32AH", "63KM II 60V32AH"] }, 
      { type: "LFP Battery", ranges: ["60KM II 60V24AH", "79KM II 60V30AH", "92KM II 60V34AH", "145KM II 60V55AH"] }, 
      { type: "NMC Battery", ranges: ["66 KM II 60V24AH", "79KM II 60V20AH", "92KM II 60V34AH", "145KM II 60V55AH", "93KM II 72V30AH", "124KM II 72V40AH"] }
    ]
  }
};

const cloudinaryimage1 = 'https://res.cloudinary.com/ddiyjetob/image/upload/v1767198879/Gemini_Generated_Image_ik89tpik89tpik89_nfldiz_mkuvu5.png';
const imagekitimage1 = 'https://ik.imagekit.io/h5k64whau/Cloudinary_Archive_2025-12-31_13_57_15_Originals/Gemini_Generated_Image_ik89tpik89tpik89_nfldiz.png?updatedAt=1767171032412';

const cloudinaryimage2 = 'https://res.cloudinary.com/ddiyjetob/image/upload/v1767198883/Gemini_Generated_Image_xy3ycjxy3ycjxy3y_c4rmx0_lmyfg3.png';
const imagekitimage2 = 'https://ik.imagekit.io/h5k64whau/Cloudinary_Archive_2025-12-31_13_57_15_Originals/Gemini_Generated_Image_9yazwk9yazwk9yaz_hmvy2f.png?updatedAt=1767171032529';

const cloudinaryimage3 = 'https://res.cloudinary.com/ddiyjetob/image/upload/v1767198877/Gemini_Generated_Image_9yazwk9yazwk9yaz_hmvy2f_qe1gpx.png';
const imagekitimage3 = 'https://ik.imagekit.io/h5k64whau/Cloudinary_Archive_2025-12-31_13_57_15_Originals/tl_model_v7pffk.jpg?updatedAt=1767171027166';

const ModelCard = ({ modelName, modelData, cloudinaryUrl, imagekitUrl }) => {
  const imageUrl = ImageHandler({ cloudinaryUrl, imagekitUrl });

  return (
    <section className="max-w-7xl mx-auto px-4 mb-20">
      <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
        <h2 className="text-4xl font-bold mb-10 text-center text-emerald-400">
          TORA {modelName}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-emerald-400/30 shadow-inner shadow-slate-600">
              <img
                src={imageUrl}
                alt={`TORA ${modelName} Electric Scooter`}
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <BatteryCharging className="w-6 h-6 text-emerald-400" />
                <span className="font-bold text-xl text-emerald-200">Fast Charging Times</span>
              </div>
              <div className="flex justify-between text-base">
                <p className="text-slate-300">Lead Acid: {modelData.chargeTimes.leadAcid}</p>
                <p className="text-slate-300">LFP: {modelData.chargeTimes.lfp}</p>
              </div>
            </div>

            {modelData.batteries.map((battery, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Battery className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-lg text-white">{battery.type} Range</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {battery.ranges.map(range => <span key={range} className="inline-block bg-slate-800 rounded-full px-3 py-1 mr-2 mb-2 text-xs font-mono">{range}</span>)}
                </p>
              </div>
            ))}

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold text-slate-200">Max Payload</span>
                </div>
                <p className="text-3xl font-extrabold text-white">{modelData.payload}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-red-400" />
                  <span className="font-semibold text-slate-200">Braking System</span>
                </div>
                <p className="text-base font-medium text-white">{modelData.brakes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const C1ModelSection = () => (
  <>
    <ModelCard
      modelName="SL"
      modelData={modelData["Accelerelo X-Pro"]}
      cloudinaryUrl={cloudinaryimage1}
      imagekitUrl={imagekitimage1}
    />

    <ModelCard
      modelName="DL"
      modelData={modelData["Accelerelo R14"]}
      cloudinaryUrl={cloudinaryimage2}
      imagekitUrl={imagekitimage2}
    />

    <ModelCard
      modelName="Tezus"
      modelData={modelData["Accelerelo +"]}
      cloudinaryUrl={cloudinaryimage3}
      imagekitUrl={imagekitimage3}
    />
  </>
);

export default C1ModelSection;
