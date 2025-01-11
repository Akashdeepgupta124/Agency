import React from 'react'
import RotatingText from './Rotater'

function Herosection({Rotater}) {
    return (
        <>
       <div className="flex gap-[1rem] justify-between textcontainer w-full px-[20%] ">
        <div className="text w-[50%]">
            <h3 className='text-4xl leading-[1.4]'>
            At Thirtysixstudio, 
            we build immersive digital experiences for brands with a purpose.
            </h3>
            <p className='text-lg mt-10 font-light'>
            We’re a boutique production studio focused on design, motion, and creative technology,
             constantly reimagining what digital craft can do for present-time ads and campaigns.
            </p>

            <p className='text-md mt-10'>Scroll</p>
        </div>
        <div className='w-[30%]'>
        <RotatingText/>
          
        </div>
       </div>
       <div className='relative'>
  <div className="h-screen flex items-center justify-center">
    <h1 className="text-[13.8rem] font-normal tracking-tight leading-none">
      Thirysixstudio
    </h1>
</div>
</div>
       
       </>
    )
}

export default Herosection
