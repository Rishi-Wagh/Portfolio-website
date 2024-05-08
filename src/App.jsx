import './App.css'
import {Routes , Route} from 'react-router-dom';
import Sections from './Sections';
import Navbar from './Naviagtion/NavBar';
import Description from './Pages/Description/Description';
import { useState } from 'react';

function App() {


  if(window.innerWidth < 1100){
   return <h1>For Better experience please use desktop/laptop</h1>
  } else {
  return (
    <>
    <Routes>
       <Route path='/' element={<Navbar />}>
        <Route path='/' element={<Sections />} />
        <Route path='/projectDesc' element={<Description />} />
       </Route>
    </Routes>
    </>
  )
}
}

export default App
