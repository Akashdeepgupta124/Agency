import React from 'react'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Services() {
    useGSAP(() => {
        // GSAP text reveal animation
        gsap.from(".text", {
            duration: 1.5,
            opacity: 0,
            y: 50, // Start the lines below the screen
          
            stagger: 0.2, // Stagger the reveal effect
            ease: "power2.out", // Smooth animation easing
        });
      }, []);
    
    return (
        <div className='Servicecontainer flex flex-col  px-[19rem] py-10 '>
            
            <p className='mb-5'>Our Services</p>
        <div className='servicetext w-full'>
            <h1 className='text text-4xl leading-[1.4] tracking-tight'>We provide captivating design, interactive animations, advanced usability, reliable code,
                 and immaculate project coordination. Whether you need a campaign built from scratch or assistance at a specific phase, we’ve got you covered.</h1>
        </div>
        </div>
    )
}

export default Services
