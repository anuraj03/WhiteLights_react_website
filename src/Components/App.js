import React from 'react';
import "./App.css"
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './Pages/Home';
import Contact from './Pages/Contact'
import Services from './Pages/Services'

import Abouts from './Pages/Abouts'
import Gallery from './Pages/Gallery';

function App() {
  return (

    <div className="container">
       <Router>
         <NavBar/>

          <Routes>
         <Route exact path='/' element={<Home/>}/>
       
         <Route  path='/abouts' element={<Abouts/>} />
         <Route  path='/contact' element={<Contact/>} />
         <Route  path='/services' element={<Services/>} />
         <Route  path='/gallery' element={<Gallery/>} />
        </Routes>
         <Footer/>
         
      </Router>
        
       
    
    </div>
  );
}

export default App;
