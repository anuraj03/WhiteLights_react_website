import React ,{useEffect,useState}from 'react'
import './Videos.css'
import Loader from '../../Loader/Loader';
import ReactPlayer from 'react-player'
function Videos() {
  const [loading ,setloading]=useState(false);
useEffect(()=>{
  setloading(true)
  setTimeout(()=>{setloading(false)},1000)
},[])

if(loading) return <Loader/>;


  return (
    <div className='gallery'>
      <div className='gallery3 box'>
      
      <div className='rp1'><ReactPlayer   controls width='350px' height='200px' url='https://youtu.be/4YoBjy-qhJ0' /></div>
      <div className='rp2'><ReactPlayer   controls width='350px' height='200px' url='https://youtu.be/4YoBjy-qhJ0' /></div>
      <div className='rp3'><ReactPlayer  controls width='350px' height='200px' url='https://youtu.be/4YoBjy-qhJ0' /></div>


         
        
        
     
      </div>
    </div>
  )
}

export default Videos
