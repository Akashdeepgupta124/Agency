import  { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Services() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const lines = gsap.utils.toArray(".text-line", containerRef.current);

        // Set initial state
        gsap.set(lines, {
            y: 50,
            opacity: 0
        });

        // Create animation with ScrollTrigger
        gsap.to(lines, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%", // Start when top of container is 80% from top of viewport
                toggleActions: "play none none reset", // Play on enter, reset when leaving bottom
                // Optional: uncomment to see trigger area
                // markers: true
            }
        });
    }, { scope: containerRef });

    const serviceText = [
        "We create stunning websites with seamless design, intuitive navigation, robust code, and flawless execution. ",
        "Whether you need a full-scale eCommerce build or expert support at any stage, we deliver innovation and precision."
    ]

    return (
        <div 
            ref={containerRef}
            className="Servicecontainer flex flex-col px-6 sm:px-12 lg:px-[19rem] py-10"
        >
            <p className="text-xl mb-5">Our Services</p>
            
            <div className="servicetext w-full">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-[1.4] tracking-tight">
                    {serviceText.map((line, index) => (
                        <span 
                            key={index} 
                            className="text-line block"
                        >
                            {line}
                        </span>
                    ))}
                </h1>
            </div>
        </div>
    );
}

export default Services;