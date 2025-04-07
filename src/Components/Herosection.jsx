
import RotatingText from './Rotater'

function Herosection({Rotater}) {
    return (
        <>
       <div className="flex flex-col gap-4 justify-between textcontainer w-full px-4 md:flex-row md:gap-[1rem] md:px-[20%]">
        <div className="text w-full md:w-[75%] lg:w-[50%] ">
            <h3 className='font-manrope text-lg md:text-2xl lg:text-4xl leading-[1.4]'>
            At Black & White Business,
             we craft immersive digital experiences for brands that dare to stand out..
            </h3>
            <p className='font-urbanist text-lg mt-10 font-light'>
            We’re a boutique web agency specializing in Shopify, WordPress, React, Next.js,
             and UI/UX—blending strategy, design, and technology to shape the future of digital presence.
             Always reimagining what websites can do for brands with purpose.
            </p>

            <p className=' fill-custom-orangetext-md mt-10'>Scroll</p>
        </div>
        <div className='w-[30%]'>
        <RotatingText/>
          
        </div>
       </div>
       <div className='relative'>
  <div className="h-screen flex items-center justify-center">
    <h1 className="text-[3rem] md:text-[7rem] lg:text-[12rem] font-normal tracking-tight leading-none">
      B&W Business
    </h1>
</div>
</div>
       
       </>
    )
}

export default Herosection
