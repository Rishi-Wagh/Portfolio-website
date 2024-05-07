import React from 'react'
import { useNavigate } from 'react-router-dom'
import './description.css';
import ImageSlider from './Img-slider';
import DescContainer from './Desc-container';
import DeployedLink from './Deployed-Link';


const projects = [
    {
        'title': '5StarMovie App',
        mainImg: 'projects/5StarMovie.png',
        category: 'OTT Platform',
        desc: ['5 star Movie Rated App , leverages React JS, CSS, and Context API for the frontend, and Node JS with REST API and MongoDB Aggregation for the backend, ensures seamless functionality. Authentication was implemented with role-based access, introducing JWT for added security. Noteworthy features include an admin panel for efficient movie management, analytics tracking, and a responsive design optimized for diverse devices.',
      ' Javascript , React Js , Context Api , Tailwind Css , Node Js , Express , Rest Api ,  MongoDB Aggregation pipeline , Cloudinary'],
        images: ['projects/5StarMovie.png',
                  'projects/5Star(2).png',
                  'projects/5Star(3).png', 
                  'projects/5Star(4).png',  
                  'projects/5Star(6).png', 
                  'projects/5Star (7).png', 
                  'projects/5Start (8).png', ],
        link: ['https://movie-review-front.vercel.app/' , "If you want to access Admin Panel, login with user-rushikesh1010wagh@gmail.com & pass-12345678 "]
    },
    {
        'title': 'HSH_Estate App',
        mainImg: 'projects/HSHestate.png',
        category: 'Real_Estate Platform',
        desc: ['HomeSweetHome Estate is a cutting-edge real estate platform built on the MERN (MongoDB, Express.js, React, Node.js) stack, incorporating Firebase, Google OAuth, and Vite for secure and seamless user access. This project offers a sophisticated user experience, with features for user authentication, secure data storage, and efficient token-based authentication using JWT.',
            'Javascript, React Js, Vite client, Context Api, Redux/Redux-toolkit, Sass, Node Js, Express, Rest Api,  MongoDB, Google Firebase, JWT-token', ],
        images: ['projects/HSHestate.png',
        'projects/hsh(1).png',
        'projects/hsh(2).png',
        'projects/hsh(3).png',
        'projects/hsh(4).png',
        'projects/hsh(5).png',
        'projects/hsh(6).png',
        'projects/hsh(7).png',],

        link: ['https://homesweethome-estate-rishi.onrender.com/' , "Wait for the Api's to load as Render takes time if there are no api calls made for certain period of time."]
      },
      {
        'title': 'Conectopedia',
        mainImg: 'projects/Connect(1).png',
        category: 'A Video Calling Platform',
        desc: ['HomeSweetHome Estate is a cutting-edge real estate platform built on the MERN (MongoDB, Express.js, React, Node.js) stack, incorporating Firebase, Google OAuth, and Vite for secure and seamless user access. This project offers a sophisticated user experience, with features for user authentication, secure data storage, and efficient token-based authentication using JWT.',
            'Javascript, React Js, Vite client, Context Api, Redux/Redux-toolkit, Sass, Node Js, Express, Rest Api,  MongoDB, Google Firebase, JWT-token', ],
        images: ['projects/Connect(1).png',
        'projects/Connect(2).png',
        'projects/Connect(3).png',
        'projects/Connect(3).png',
        'projects/Connect(5).png',
        'projects/Connect(6).png',
        'projects/Connect(7).png',
        'projects/Connect(8).png',
        'projects/Connect(9).png',],

        link: ['https://conectopediabyrishi.netlify.app/' , "Wait for the Api's to load as Netlify takes time if there are no api calls made for certain period of time."]
      }
]

const Description = () => {
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(window.location.search);
    const i = searchParams.get('i');

  return (
    <div className='page-container'>
       <div className="main-img-container">
          <div className="main-img"
           style={{ backgroundImage:`url(${projects[i].mainImg})`}}></div>
       </div>
       <div className="title-container">
           <div className="p-title">
            {projects[i].title}
            </div>
           <div className="p-category">
            <span className='c1'>Category</span>
            <span className='c2'>{projects[i].category}</span>
           </div>
       </div>
      <ImageSlider images={projects[i].images} />
      <DescContainer desc={projects[i].desc} />
      <DeployedLink Dlink={projects[i].link}/>
    </div>      
  )
}

export default Description