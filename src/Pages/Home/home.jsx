import React, { useEffect, useState } from "react";
import './home.css';
import About from "../About/About";

const Home = ({scrollPosition , setScrollPosition}) => {
 

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{zIndex: '50'}}>
    <div style={{ 
      height: "211vh" ,
      width: '100%',
      backgroundColor: 'black',
      color: 'white',
      }}>

          {/*first title*/}
          
        <div
          style={{
          position: 'fixed',
          whiteSpace: "nowrap",
          top: '120px',
          fontSize: '95px',
          fontFamily: 'system-ui',
          fontWeight: '600',
          left: `${155-(scrollPosition * 1.2)}px`,
          }}
          className="name-text">
          RUSHIKESH WAGH
        </div>
   
        {/*Second text*/}
      
        <div
          style={{
          position: 'fixed',
          whiteSpace: "nowrap",
          top: '340px',
          fontSize: '30px',
          fontFamily: 'sans-serif',
          fontWeight: '600',
          left: `${530-(scrollPosition * 0.6)}px`,
          }}
          className="name-text">
          hello
        </div>

        {/*Image dispaly*/}

        <div 
          className="profile"
          style={{
            height: `${(scrollPosition < 1100 ? 180+(scrollPosition * 0.06) : 180 + (1100*0.06))}px`,
            width: `${(scrollPosition < 1100 ? 180+(scrollPosition * 0.06) : 180 + (1100*0.06))}px`,
            top: `${(scrollPosition < 1100 && 290 - (scrollPosition * 0.03))}px` ,
            left: `${(scrollPosition < 1100 && 660 - (scrollPosition * 0.03))}px`,
            position: 'sticky',
            }}>
         </div>
        
        {/*Third text*/}
  
        <div
          style={{
          position: 'fixed',
          whiteSpace: "nowrap",
          top: '340px',
          fontSize: '30px',
          fontFamily: 'sans-serif',
          fontWeight: '600',
          right: `${490-(scrollPosition * 0.6)}px`,
          }}
          className="name-text">
          welcome
        </div>

        {/*Fourth text*/}
  
        <div
          style={{
          position: 'fixed',
          whiteSpace: "nowrap",
          top: '500px',
          fontSize: '95px',
          fontFamily: 'system-ui',
          fontWeight: '600',
          right: `${110-(scrollPosition * 1.2)}px`,
          }}
          className="name-text">
          FULLSTACK DEVELOPER
        </div>

        {/*Fifth text*/}
      
        <div
          style={{
          position: 'fixed',
          whiteSpace: "nowrap",
          top: '610px',
          fontSize: '25px',
          fontFamily: 'system-ui',
          color: 'gray',
          fontWeight: '600',
          right: `${110-(scrollPosition  * 0.5)}px`,
          }}
          className="name-text">
          Based in India (MH)
        </div>

         {/*Sixth text*/}

         <div
          style={{
          position: 'absolute',
          whiteSpace: "nowrap",
          top: '1300px',
          fontSize: '145px',
          fontFamily: 'system-ui',
          color: 'white',
          fontWeight: '600',
          marginLeft: '120px',
          }}
          className="name-text">
          ABOUT
        </div>

      </div>
    </div>
  );
};

export default Home;


