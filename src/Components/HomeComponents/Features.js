import React from 'react'
import CAMERAICON from '../../Assets/camera.png';
import Retouch from '../../Assets/magic-wand.png';
import Colour from '../../Assets/art.png';
import Sharpen from '../../Assets/sharpen.png';
import Vintage from '../../Assets/photo-camera.png';
const data=[
  {
    img:CAMERAICON,
    heading:"Fix Pixelated Images",
    description:'Easily fix old pictures with AI photo restore technology that eliminates pixelation and improves image clarity.'

  },
  {
    img:Retouch,
    heading:"Retouch Old Photos",
    description:'Repair and restore old damaged photos by fixing scratches, stains, and other imperfections.'

  },
  {
    img:Colour,
    heading:"Restore Colors and Clarity",
    description:'Bring black-and-white images or faded photos back to life with our AI restore old photos solution.'

  },
  {
    img:Sharpen,
    heading:"Restore Blurry Photos",
    description:'Restore blurry photos to sharp, high-quality images.'

  },
  {
    img:Vintage,
    heading:"Old Picture Restoration",
    description:'Turn your old photos into new photos with just one click.'

  },
]
const Features = () => {
  return (
    <div className='flex items-center justify-center  py-20 mt-8'>
    <div className='w-[100%] lg:w-[100%]'>
     <h2 className='w-[80%] text-2xl lg:text-4xl   text-center  font-bold lg:w-[60%] mx-auto '>Key Features of Our AI Photo Restoration</h2>
     <p className='mb-12 w-[80%]  text-center mt-5  lg:w-[60%] mx-auto '>No matter the issue—fix old photos, restore blurry images, or even repair old photos—our tool uses advanced AI algorithms for photo restoration AI.</p>
     <div className='flex flex-col sm:flex-row items-center flex-wrap justify-center gap-8'>
  
        {
          data.map((x)=>(
            <div className='bg-new-line px-4 py-5 rounded-xl w-[70%] sm:w-[40%] md:w-[35%] flex-none max-w-[290px]'>
<img src={x.img} className='w-16 h-16'/>
        <h3 className='font-extrabold text-lg mt-5 mb-3'>{x.heading}</h3>
        <p className='text-justify mt-5 h-[13rem] md:h-[6rem] text-[#707177]'>{x.description}</p>
      </div>
          ))
        }

     
     </div>
    </div>
 </div>
  )
}

export default Features