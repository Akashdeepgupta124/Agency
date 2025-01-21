
import './App.css'

import { useEffect } from 'react';
import Herosection from './Components/Herosection';

import LocomotiveScroll from 'locomotive-scroll';
import Whatwedo from './Components/Whatwedo';
import Services from './Components/Services';
import Faqs from './Components/Faqs';
import Sections from './Components/Sections';
import Givesimilar from './Components/Givesimilar';
import Giveback from './Components/Giveback';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

import Footer from './Components/Footer';


function App() {

  useEffect(() => {
const locomotiveScroll = new LocomotiveScroll();

  }, [])
  return (
  
      <>
      
     
     
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
      
      <Faqs/>
      <Sections/>
      <Givesimilar/>
      <Giveback/>
      <Contact/>
      
      <Footer/>
      </>
  )
}

export default App
