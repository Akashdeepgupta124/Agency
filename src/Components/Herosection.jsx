
import RotatingText from './Rotater'

function Herosection({Rotater}) {
    return (
        <>
       <div className="flex flex-col gap-4 justify-between textcontainer w-full px-4 md:flex-row md:gap-[1rem] md:px-[20%]">
        <div className="text w-full md:w-[75%] lg:w-[50%] ">
            <h3 className='font-manrope text-lg md:text-2xl lg:text-4xl leading-[1.4]'>
            At Thirtysixstudio, 
            we build immersive digital experiences for brands with a purpose.
            </h3>
            <p className='font-urbanist text-lg mt-10 font-light'>
            We’re a boutique production studio focused on design, motion, and creative technology,
             constantly reimagining what digital craft can do for present-time ads and campaigns.
            </p>

            <p className=' fill-custom-orangetext-md mt-10'>Scroll</p>
        </div>
        <div className='w-[30%]'>
        <RotatingText/>
          
        </div>
       </div>
       <div className='relative'>
  <div className="h-screen flex items-center justify-center">
    <h1 className="text-[4rem] md:text-[8rem] lg:text-[14rem] font-normal tracking-tight leading-none">
      B&W studio
    </h1>
</div>
</div>
       
       </>
    )
}

export default Herosection
