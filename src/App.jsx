import './App.css'
import {Routes , Route} from 'react-router-dom';
import Sections from './Sections';
import Navbar from './Naviagtion/NavBar';
import Description from './Pages/Description/Description';

function App() {
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

export default App
