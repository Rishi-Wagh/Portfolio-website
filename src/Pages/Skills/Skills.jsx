import React, { useEffect, useState } from 'react';
import reactImg from '/icons/react.png';
import htmlImg from '/icons/html.png';
import cssImg from '/icons/css.png';
import sassImg from '/icons/sass.png';
import tailwindImg from '/icons/tailwind.png';
import typescriptImg from '/icons/typescript.png';
import mongoDbImg from '/icons/mongo-db.png';
import nodeImg from '/icons/nodejs.png';
import npmImg from '/icons/npm.png';
import visualImg from '/icons/visual-studio-code.png';
import gitImg from '/icons/git.png';
import jsImg from '/icons/javascript.png';


import './skills.css'; // Import CSS file for styling

const Skills = ({ scrollPosition }) => {

  let scrollTo = Math.floor(scrollPosition / 100);


  return (
    <div
      className="skills-container" 
      style={{
        height: '180vh',
        background: 'black',
        border: '1px solid black',
        zIndex: '50' ,
        position: 'relative' ,
      }}
    >
      <div className="skills-text" 
        style={{ 
         fontSize: '400px' ,
         color: (scrollTo > 19 ? `rgba(123 , 123, 123)` : 'rgba(255, 255, 255)') ,
         fontFamily: 'system-ui' ,
         marginLeft: '120px' ,
         position: 'sticky',
         fontWeight: 'bold' ,
         zIndex: '50' ,
         top: '90px' ,
         display: (scrollTo > 24 && 'none')
           }}>
        SKILLS
      </div>

    <div 
    style={{
      position: 'absolute',
      zIndex: '100',
      marginLeft: '50px',
      top: '650px'
       }}>

<img 
     src={reactImg} 
     style={{ 
     height: '150px',
     width: '150px' ,
     margin: '40px',
     filter: 'contrast(120%)',
     }} />

<img 
     src={htmlImg} 
     style={{ 
     height: '150px',
     width: '150px' ,
     margin: '40px',
     filter: 'contrast(100%)'
     }} />

<img 
     src={cssImg} 
     style={{ 
     height: '150px',
     width: '150px' ,
     margin: '40px'
     }} />

<img 
     src={sassImg} 
     style={{ 
     height: '150px',
     width: '150px' ,
     margin: '40px'
     }} />

<img 
     src={tailwindImg} 
     style={{ 
     height: '150px',
     width: '150px' ,
     margin: '40px'
     }} />

<img 
     src={nodeImg} 
     style={{ 
     height: '150px',
     width: '150px' ,
     margin: '40px'
     }} />

<img 
     src={mongoDbImg} 
     style={{ 
     height: '150px',
     width: '150px' ,
     margin: '40px'
     }} />

<img 
     src={visualImg} 
     style={{ 
     height: '150px',
     width: '150px' ,
     margin: '40px'
     }} />

<img 
     src={npmImg} 
     style={{ 
     height: '150px',
     width: '150px' ,
     margin: '40px'
     }} />

<img 
     src={typescriptImg} 
     style={{ 
     height: '150px',
     width: '150px' ,
     margin: '40px'
     }} />

<img 
     src={jsImg} 
     style={{ 
     height: '150px',
     width: '150px' ,
     margin: '40px'
     }} />

<img 
     src={gitImg} 
     style={{ 
     height: '150px',
     width: '150px' ,
     margin: '40px'
     }} />

     

    </div>
      
      </div>
  );
}

export default Skills;
