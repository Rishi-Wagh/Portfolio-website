import React, { useState } from 'react'
import './project.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from 'react-router-dom';

const Project = ({scrollPosition}) => {
  const navigate = useNavigate();
  let scrollTo = Math.floor(scrollPosition / 100);

  return (
    <div className='project-page'>
        <div className={scrollTo > 25 ? "projectPageTitleDiv" : 'p-h-none'}>
            <div className= "projectPageHead" >
                My Inovative Undertaking
            </div>
            <div className="projectPageQuote">
                Something think later
            </div>
        </div>

        <div className="projectPageDisplay">

            <div className={scrollTo > 28 ? "projectContainer container1" : 'c-d-none'}>
              <div className="projectImage1"></div>
              <div className="projectTitle" onClick={()=>{navigate('/projectDesc?i=0')}}>
                <div>
                 <div className="projectHead">5 Star Movie App</div>
                  <div className="projectDesc ">An Ott Streaming App</div> 
                 </div>  
                 <div><ArrowOutwardIcon /></div>
              </div>
            </div>
            <div className={scrollTo > 28 ? "projectContainer container2" : 'c-d-none'}>
            <div className="projectImage2"></div>
              <div className="projectTitle" onClick={()=>{navigate('/projectDesc?i=1')}}>
                <div>
                 <div className="projectHead">Home Sweet Home Estate </div>
                  <div className="projectDesc">A Real Estate Web App</div>  
                  </div>
                  <div><ArrowOutwardIcon /></div> 
              </div>
            </div>
            <div className="blurCircle"></div>
        </div>

       
    </div>
  )
}

export default Project