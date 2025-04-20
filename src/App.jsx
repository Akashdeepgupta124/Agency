
import './App.css'

import { useEffect } from 'react';


import LocomotiveScroll from 'locomotive-scroll';
import Whatwedo from './Components/Whatwedo';
import Services from './Components/Services';

import Sections from './Components/Sections';
import Givesimilar from './Components/Givesimilar';
import Giveback from './Components/Giveback';
import Contact from './Components/Contact';

import Footer from './Components/Footer';

import DragonSlider from './Components/SLider';

import Accordion from './Components/Accordians';
import CursorDot from './Components/cursor';
import PricingTable from './Components/Pricingtable';
import InfiniteLogoScroll from './Components/infinitescroll';
import ImageSlider from './Components/ImageSlider';
import  ServicesComponent from './Components/ourservices';

import BentoGridSlider from './Components/BentoGridslider';

import VerticalBrandBento from './Components/BrandSlider';
import  LampDemo  from './Components/lamp';


function App() {

  useEffect(() => {
const locomotiveScroll = new LocomotiveScroll();

  }, [])
  return (
  
      <>
      
     <CursorDot/>
     
      
      <LampDemo/>
      <InfiniteLogoScroll/>
      <section id="home" className="min-h-screen pt-16">
      
     
      
      < ServicesComponent/>
      <section id="services" className="min-h-screen pt-16">
      <Services/>
      </section>
      <VerticalBrandBento/>
      
      
      </section>
      {/* <ServicesSection/> */}
      
      
      <section id="about" className="min-h-screen pt-16">
      <Whatwedo/>
      <div>
      {/* Add padding to test scrolling */}
      
      <ImageSlider/>
     
    </div>
      </section>
      {/* <DragonSlider/> */}
      <div className="min-h-screen w-full flex items-center justify-center">
      <Accordion />
    </div>
      {/* <Faqs/> */}
      <Sections/>
      <PricingTable/>
      <Givesimilar/>
      <Giveback/>
      
      <Contact/>
      
      <Footer/>
      
      </>
  )
}

export default App
