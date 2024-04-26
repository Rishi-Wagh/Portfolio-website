import React from 'react'

const About = () => {
  return (
    <div 
    style={{
      margin: '0px',
      height: '50vh',
      backgroundColor: 'black' ,
      border: '1px solid black',
      color: 'white'}}>

      <div 
       className='about-section'
       style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0px 640px',
          width: '52%',
          fontSize: '30px' ,
          fontFamily: 'system-ui'

          }}>
         <p>
          Welcome to my portfolio website! As a skilled Full Stack Developer with over 6 months of professional
          experience and more than 1 year dedicated to mastering the MERN (MongoDB, Express.js, React.js, Node.js)
          stack through continuous learning and personal projects, I am passionate about creating dynamic and
          innovative web solutions.
         </p>
      </div>

    </div>
  )
}

export default About