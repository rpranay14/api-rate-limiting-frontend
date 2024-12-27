import React, { useState } from 'react';
import { 
  Camera, 
  Clock, 
  PenTool, 
  DollarSign, 
  ArrowRight, 
  Layers 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WhySection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Clock className="w-16 h-16 text-blue-500" />,
      title: "Instant Restoration",
      headline: "Seconds, Not Weeks",
      description: "Restore photos AI in seconds, saving time and effort.",
      background: "bg-blue-50",
      textColor: "text-blue-800"
    },
    {
      icon: <PenTool className="w-16 h-16 text-green-500" />,
      title: "Precision Restoration",
      headline: "AI-Powered Perfection",
      description: "Fix old photos with high accuracy, from fixing pixelated images to retouching old photos.",
      background: "bg-green-50",
      textColor: "text-green-800"
    },
    {
      icon: <DollarSign className="w-16 h-16 text-purple-500" />,
      title: "Affordable Solution",
      headline: "Professional Quality, Minimal Cost",
      description: "Why pay for expensive professionals? AI photo restoration offers the best photo restoration at a fraction of the cost.",
      background: "bg-purple-50",
      textColor: "text-purple-800"
    },
    {
      icon: <Camera className="w-16 h-16 text-orange-500" />,
      title: "Unlimited Versatility",
      headline: "No Photo Too Challenging",
      description: "Whether it’s a pixelated image fix, restoring blurry photos, or repairing old photos, our tool does it all.",
      background: "bg-orange-50",
      textColor: "text-orange-800"
    }
  ];


  return (
    <div className='mt-8 py-20'>
    <h2 className='w-[100%] text-2xl lg:text-4xl   text-center  font-bold lg:w-[50%] mx-auto '>Why Choose AI for Photo Restoration?</h2>
    <p className=' w-[100%]  text-center mt-5  lg:w-[50%] mx-auto mb-8'>Using AI to restore old photos offers many advantages for preserving your memories.Our AI technology can restore even the most challenging images, including old photo recovery and restore old damaged photos.</p>
    <div className=" bg-gray-100 flex items-start justify-center p-4">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">
        {/* Feature Selector Column */}
        <div className="bg-gray-50 p-8 space-y-4">
         
          {features.map((feature, index) => (
            <div 
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`
                cursor-pointer p-4 rounded-xl transition-all duration-300 flex items-center
                ${activeFeature === index 
                  ? `${feature.background} ${feature.textColor} shadow-md` 
                  : 'hover:bg-gray-100 text-gray-600'}
              `}
            >
              {feature.icon}
              <div className="ml-4">
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                
              </div>
              <ArrowRight className="ml-auto opacity-50" />
            </div>
          ))}
        </div>

        {/* Feature Details Column */}
        <div className="p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="flex justify-center mb-6 scale-125">
              {features[activeFeature].icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {features[activeFeature].title}
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              {features[activeFeature].description}
            </p>
            <div className="flex justify-center">
             <Link to="/restorephotos"> <button className="
                bg-[#1769aa] text-white 
                px-6 py-3 rounded-full 
    
                transition-colors 
                flex items-center 
                group
              ">
                Restore Your Photos
                <Layers className="ml-2 group-hover:rotate-12 transition-transform" />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhySection;