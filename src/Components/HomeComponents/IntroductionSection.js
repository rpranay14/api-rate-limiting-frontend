import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import OLDIMG from '../../Assets/second-img.png';
import IMGICON from '../../Assets/image-flaticon.png'
import GUARANTEEICON from '../../Assets/guarantee.png'
import CAMERAICON from '../../Assets/camera.png'
import SECURE from '../../Assets/protection.png';

const data=[
    {
        img:IMGICON,
        heading:"Transform Your Old Photos",
        description:"Eliminate pixelation and improve image clarity with advanced AI technology."
    },
    {
        img:GUARANTEEICON,
        heading:"Restore Colors",
        description:"Bring black-and-white and faded photos back to life with vibrant colors."
    },
    {
        img:CAMERAICON,
        heading:"Enhance Photo Quality",
        description:"Remove scratches, stains, and other imperfections with a single click."
    },
    {
        img:SECURE,
        heading:"100% Secure",
        description:"Your memories are safe with our secure upload and immediate deletion process."
    }
]
const IntroductionSection = () => {
  return (
    <div className='flex items-center justify-center bg-[#EFEFEF] py-20 mt-8'>
       <div className='w-[80%] md:w-[100%] lg:w-[80%] xl:w-[60%]'>
        <h2 className='w-[100%] text-2xl lg:text-4xl   text-center  font-bold lg:w-[50%] mx-auto mb-16 '>Transform your Old Photos</h2>
        <div className='flex flex-col md:flex-row flex-none items-center justify-center gap-8 flex-wrap'>
           {data.map((x)=>(
            <div className='bg-white flex-none shadow-xl px-12 py-8 rounded-xl flex flex-col items-center justify-center w-[100%] md:w-[45%] lg:w-[45%] max-w-[507px]'>
            <img src={x.img} className='w-12 h-12'/>
            <h2 className='mt-4 font-bold text-center h-[3rem] sm:h-[1.5rem]'>{x.heading}</h2>
            <p className='text-center md:h-[5rem]'>{x.description}</p>
        </div>
           ))} 
          
          
        </div>
       </div>
    </div>
  )
}

export default IntroductionSection