import React from 'react'
import './description.css'

const DescContainer = ({desc}) => {

  return (
    <div className='Desc-container'>
        <div className="desc-title">Project Details</div>
        <div className="desc-overview">
            {desc[0]}
        </div>
        <div className="desc-stack">
           <div className="stack-title">Tech Stack</div> 
          <div className='stack'>{desc[1]} </div> 
        </div>
    </div>
  )
}

export default DescContainer