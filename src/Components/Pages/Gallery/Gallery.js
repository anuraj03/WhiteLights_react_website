import React, { useState,useEffect } from 'react'

import "./Gallery.css"

import img from '../../../image/about.jpg'
import img1 from '../../../image/image1.jpg'
import img2 from '../../../image/image2.jpg'
import img3 from '../../../image/image3.jpg'
import img4 from '../../../image/image4.jpg'
import img5 from '../../../image/image5.jpg'
import img6 from '../../../image/image6.jpg'
import img7 from '../../../image/image7.jpg'
import img8 from '../../../image/image8.jpg'
import img9 from '../../../image/image9.jpg'
import close from '../../../image/close.png'
import video from '../../../image/videos.png'
import { Link } from 'react-router-dom'
import Loader from '../../Loader/Loader'




const Gallery=()=> {
  
  let data=[
   
    {
      id:1,
      imgSrc:img
    },
    {
      id:2,
      imgSrc:img1
    },
    
    {
      id:3,
      imgSrc:img2
    },
    {
      id:4,
      imgSrc:img3
    },
    {
      id:5,
      imgSrc:img4
    },
    {
      id:6,
      imgSrc:img5
    },
    {
      id:7,
      imgSrc:img6
    },
    {
      id:8,
      imgSrc:img7
    },
    {
      id:9,
      imgSrc:img8
    },
    {
      id:10,
      imgSrc:img9
    },
   
   
  ]

  
  const [model,setModel]=useState(false);
  const [tempImgSrc,setTempImgSrc]= useState('');
  const getImg = (imgSrc)=>{
    
    setTempImgSrc(imgSrc);
    setModel(true);

}
const [loading ,setloading]=useState(false);
useEffect(()=>{
  setloading(true)
  setTimeout(()=>{setloading(false)},1000)
},[])

if(loading) return <Loader/>;
   return (
  
    <div className='gallery'>
      
      <div className='vgallery'>
        
      
      <div className={model? "model open":"model"}>
       <img className='close-icon' src={close} alt="close" onClick={()=>setModel(false)}/>
       
      <img  src={tempImgSrc} alt='temp'/>
      </div>
       
      <div className='gallery2'> 
      <Link to='/videos'><img   className='vimage' src={video}/></Link>
       {data.map((item,index)=>{
        return(
          
          <div className='pics' key={index} onClick ={()=>getImg(item.imgSrc)}>
           
           <img src={item.imgSrc} style={{width:'100%'} } alt='pic' />
          </div>
          
          
        )
      }
     
      
  
      )}
      
      
      </div>
      
     
     
     
    
  
        
    </div>
    </div>
    
  )
}


export default Gallery