import React from 'react'
import Home from './Pages/Home/home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Project from './Pages/Projects/Project';
import { useState } from 'react';
import Contact from './Pages/Contact/Contact';

const Sections = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  //console.log(scrollPosition);

  return (
    <div>
     <Home 
      setScrollPosition={setScrollPosition} 
      scrollPosition={scrollPosition}/>
     <About />
     <Skills 
     scrollPosition={scrollPosition}/>
     <Project 
     scrollPosition={scrollPosition}/>
     <Contact 
     scrollPosition={scrollPosition}/>
    </div>
  )
}

export default Sections