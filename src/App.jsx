
import './App.css'

import { useEffect } from 'react';
import Herosection from './Components/Herosection';

import LocomotiveScroll from 'locomotive-scroll';
import Whatwedo from './Components/Whatwedo';
import Services from './Components/Services';

import Sections from './Components/Sections';
import Givesimilar from './Components/Givesimilar';
import Giveback from './Components/Giveback';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

import Footer from './Components/Footer';

import DragonSlider from './Components/SLider';

import Accordion from './Components/Accordians';
import CursorDot from './Components/cursor';
import PricingTable from './Components/Pricingtable';


function App() {

  useEffect(() => {
const locomotiveScroll = new LocomotiveScroll();

  }, [])
  return (
  
      <>
      
     <CursorDot/>
     
      <Navbar/>
      <section id="home" className="min-h-screen pt-16">
      <Herosection/>
      </section>
      
      <section id="about" className="min-h-screen pt-16">
      <Whatwedo/>
      </section>
      <section id="services" className="min-h-screen pt-16">
      <Services/>
      </section>
      <DragonSlider/>
      <div className="min-h-screen w-full flex items-center justify-center">
      <Accordion />
    </div>
      {/* <Faqs/> */}
      <Sections/>
      <Givesimilar/>
      <Giveback/>
      <PricingTable/>
      <Contact/>
      
      <Footer/>
      </>
  )
}

export default App
