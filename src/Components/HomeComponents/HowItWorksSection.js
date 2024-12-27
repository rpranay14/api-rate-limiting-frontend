import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const HowItWorksSection = () => {
  return (
    <div className='flex items-center justify-center mt-8 py-20 bg-[#EFEFEF]'>
       <div className='w-[100%] lg:w-[80%]'>
        <h2 className='w-[80%] text-2xl lg:text-4xl   text-center  font-bold lg:w-[60%] mx-auto '>How Our AI Restoration Works</h2>
        <p className='mb-12 w-[80%]   text-center mt-5  lg:w-[60%] mx-auto '>Whether you need a photo restoration AI or to restore damaged photos, our tool offers the perfect solution for all your old photo recovery needs.</p>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
            <div className='w-[80%] md:w-[28%] lg:w-[20%] max-w-[229px] flex justify-center items-center flex-col'>
                <p className='bg-[#1769aa] text-white w-16 h-16 text-2xl rounded-full flex items-center justify-center font-bold mb-4'>1</p>
                <p className='text-lg font-extrabold text-center h-[3.5rem]  md:h-[4rem] lg:h-[4rem]'>Upload Your Photo</p>
                <p className='text-center  h-[6rem]'>Select the image you want to restore my photos and upload it.</p>
            </div>
            <FaArrowRightLong className='hidden md:block mb-3'/>
            <div className='w-[80%] md:w-[28%] lg:w-[20%] max-w-[229px]  flex justify-center items-center flex-col'>
                <p className='bg-[#1769aa] text-white w-16 h-16 text-2xl rounded-full flex items-center justify-center font-bold mb-4'>2</p>
                <p className='text-lg font-extrabold text-center  h-[3.5rem] md:h-[4rem]  lg:h-[4rem]'>AI Processes and Enhances</p>
                <p className='text-center  h-[6rem]'>Our AI  enhances your image, renewing old photos and fixing imperfections.</p>
            </div>
            <FaArrowRightLong className='hidden md:block mb-3'/>
              <div className='w-[80%] md:w-[28%] lg:w-[20%] max-w-[229px] flex justify-center items-center flex-col'>
                <p className='bg-[#1769aa] text-white w-16 h-16 text-2xl rounded-full flex items-center justify-center font-bold mb-4'>3</p>
                <p className='text-lg font-extrabold text-center h-[3.5rem] md:h-[4rem]  lg:h-[4rem]'>Download Restored Photo</p>
                <p className='text-center h-[6rem]'>Once the restoration is complete, simply download your enhanced photo.</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default HowItWorksSection