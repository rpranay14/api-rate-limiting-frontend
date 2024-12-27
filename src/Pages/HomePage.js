import React from 'react'
import { Link } from 'react-router-dom';
import HOMEIMG from '../Assets/home-page-test.jpeg'
import RestoreIMG from '../Assets/out.png'
import FooterComponent from '../Components/FooterComponent';
import IntroductionSection from '../Components/HomeComponents/IntroductionSection';
import HowItWorksSection from '../Components/HomeComponents/HowItWorksSection';
import Features from '../Components/HomeComponents/Features';
import BenefitSection from '../Components/HomeComponents/BenefitSection';
import FAQ from '../Components/HomeComponents/FAQ';
import WhySection from '../Components/HomeComponents/WhySection';

const HomePage = () => {
  return (
    <>
    <div className='px-4 lg:px-0'>
        <h1 className='w-[100%] text-2xl lg:text-4xl   text-center mt-24 font-bold lg:w-[50%] mx-auto '><span className='text-[#1769aa]'>Restore Your Photos with AI – </span>Revive, Repair, and Enhance Old Images Effortlessly</h1>
        <p className='w-[100%] mt-4 text-center text-base lg:text-xl lg:w-[50%] mx-auto text-[#8a8a8a]'>Restore old photos with AI effortlessly! Upload pixelated, damaged, or blurry images, and let our AI-powered photo restoration tool bring them back to life.</p>
        <div className='flex items-center justify-center mt-8'><Link to="/restorephotos"><button className='mx-auto bg-black text-base lg:text-xl text-white px-4 py-2 rounded-lg hover:opacity-80'>Restore your photos</button></Link></div>
    <div className=' my-10 flex gap-4 justify-center items-center'>
     <div className='lg:w-[18%] sm:w-[30%] w-[50%]'>
      <p className='text-base lg:text-xl mb-3 text-center font-bold'>Original Photo</p>
      <img src={HOMEIMG} className='w-[100%] h-auto rounded-md shadow-2xl'/>
     </div>
     <div className='lg:w-[18%] w-[50%] sm:w-[30%]'>
      <p className='text-base lg:text-xl  mb-3  text-center font-bold'>Restored Photo</p>
      <img src={RestoreIMG} className='w-[100%] h-auto rounded-md shadow-2xl'/>
     </div>
     <div>

     </div>
    </div>
    </div>
    <IntroductionSection/>
    <WhySection/>
    <HowItWorksSection/>
    <Features/>
    <BenefitSection/>
    <FAQ/>
    <FooterComponent/>
   
    </>
  )
}

export default HomePage