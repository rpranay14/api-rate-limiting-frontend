import React from 'react'
import CAMERAICON from '../../Assets/old-camera.png';
import STARCAMERAICON from '../../Assets/star-camera.png';
import FAMILYTREE from '../../Assets/family-tree.png';
const data=[
  {
    img:STARCAMERAICON,
    heading:"Photographers",
    description:'Use AI to restore old photos and improve image quality.',
  },
  {
    img:FAMILYTREE,
    heading:'Family Historians',
    description:'Restore and renew old photos to relive family memories.',
  },
  {
    img:CAMERAICON,
    heading:'Collectors',
    description:'Fix old photos to make your vintage collections look brand new.',
  },

]
const BenefitSection = () => {
    return (
        <div className='flex items-center justify-center py-20 mt-8 bg-[#EFEFEF]'>
        <div className='w-[100%] lg:w-[80%]'>
         <h2 className='w-[80%] text-2xl lg:text-4xl   text-center font-bold lg:w-[60%] mx-auto '>Who Can Benefit from AI Photo Restoration?</h2>
         <p className='mb-12 w-[80%]  text-center mt-5  lg:w-[60%] mx-auto '>Our tool is perfect for anyone looking to repair old photos and preserve memories. Whether you need to restore old damaged photos or repair old photos, our tool can help bring your precious memories back to life.</p>
         <div className='flex flex-col sm:flex-row items-center flex-wrap justify-center gap-8'>
          {data.map((x)=>(
   <div className='bg-new-line px-4 py-5 rounded-xl w-[70%] sm:w-[28%] flex-none max-w-[235px]'>
   <img src={x.img} className='w-16 h-16'/>
   <h3 className='font-extrabold text-lg mt-5 mb-3 h-[2.5rem] md:h-[1.5rem]'>{x.heading}</h3>
   <p className='text-justify mt-5 h-[8rem] md:h-[5rem] text-[#707177]'>{x.description}</p>
 </div>
          ))}
       
       
         </div>
        </div>
     </div>
      )
}

export default BenefitSection