import React, { useState } from 'react'
import './contact.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { Link } from 'react-router-dom';

const Contact = ({scrollPosition}) => {
  let scrollTo = Math.floor(scrollPosition / 100);

  const [mailMsg , setMailMsg] = useState({
    'email': '' , 'subject': '' , 'message': ''
  })
  
 const handleFromValue = ({target}) =>{
    const { name , value} = target;

     setMailMsg(
     {...mailMsg , [name] : value }) 
    }



  return (
    <div className='contact-page'> 
         <div className="contact-container" style={{zIndex: (scrollTo < 50 ? '-5' : '0')}}>
            <div className="contact-title">HIRE ME</div>
            <div className="contact-intro">I design and code beautifully simple things and I love what I do. Just simple like that!</div>

            <div className="msg-container">
             <div className='form' >
               <input type="email" placeholder="Email" name="email" onChange={handleFromValue} value={mailMsg.email} />
               <input type="text" placeholder="Subject" name="subject" onChange={handleFromValue} value={mailMsg.subject} />
               <textarea placeholder="Message" name="message" rows="4" onChange={handleFromValue} value={mailMsg.message} />
               <Link className='conatct-link'
                  to={`mailto:rushi8210wagh@gmail.com?subject= ${mailMsg.subject}&body=${mailMsg.message}`}>
                   <button type="submit">Send</button>
               </Link>
             </div>
           

            <div className="deatils-contaier">
              <div className="email-container">
                <div className="email-icon">
                  <MailOutlineIcon />
                </div>
                <div className="mail-display">rushi8210wagh@gmail.com</div>
              </div>
              <div className="call-container">
                <div className="call-icon">
                  <PhoneAndroidIcon />
                </div>
                 <div className="call-display">
                   08208844965
                 </div>
              </div>
              </div>

            </div>

         </div>
       </div>
  )
}

export default Contact