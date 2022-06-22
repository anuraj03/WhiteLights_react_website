import React ,{useState, useEffect}from 'react';
import "./App.css"

import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './Pages/Home';
import Contact from './Pages/Contact'
import Services from './Pages/Services/Services'

import Abouts from './Pages/Abouts'
import Gallery from './Pages/Gallery/Gallery';
import Videos from './Pages/VideoGallery/Videos'
import AppLoader from './Loader/AppLoader';




function App() {
  const [loading ,setloading]=useState(false);
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{setloading(false)},2000)
  },[])
 
  if(loading) return <AppLoader/>;
  return  (

 
    
      
  



    <div className="container">
     
       
      
        
  

      <Router>
         <NavBar/>
         

        <Routes>
         <Route exact path='/' element={<Home/>}/>
       
         <Route  path='/abouts' element={<Abouts/>} />
         <Route  path='/contact' element={<Contact/>} />
         <Route  path='/services' element={<Services/>} />
         <Route  path='/gallery' element={<Gallery/>} />
         <Route  path='/videos' element={<Videos/>} />
         
        </Routes>
        
         <Footer/>
         
       </Router>
        
        </div>
 
  );
}

export default App;
