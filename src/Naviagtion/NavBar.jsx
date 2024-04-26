import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div 
       style={{
         margin: '-8px'
       }}>
    <div 
      style={{
        position: 'fixed',
        height: '100px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: '100'
        }}>
        <Link 
          to={'/'}
          style={{
            all: 'unset' ,
            color: 'white' ,
            fontFamily: 'sans-serif',
            fontSize: '30px',
            marginTop: '25px' ,
            marginLeft: '80px',
            backgroundColor: 'rgba(26, 26, 26, 0.526)',
            padding: '10px 25px',
            borderRadius: '50px'
           }}
          >
         <span> Info </span> 
        </Link>
    </div>
    <Outlet />
    </div>
  )
}

export default Navbar