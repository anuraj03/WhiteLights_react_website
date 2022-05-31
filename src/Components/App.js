import React from 'react';

import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom"


import Home from './Pages/Home';
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import FAQ from './Pages/FAQ'
import Abouts from './Pages/Abouts'

function App() {
  return (

    <div className="container">
      Hello World
      
      
      <Router>
         <NavBar/>
          <Routes>
         <Route exact path='/' element={<Home/>}/>
       
         <Route  path='/abouts' element={<Abouts/>} />
         <Route  path='/contact' element={<Contact/>} />
         <Route  path='/services' element={<Services/>} />
         <Route  path='/faq' element={<FAQ/>} />
         </Routes>
         
      </Router>
        
       
    
    </div>
  );
}

export default App;
