import React, { useState } from 'react'

import "./Gallery.css"
import img from '../../image/about.jpg'
import img1 from '../../image/image1.jpg'
import img2 from '../../image/image2.jpg'
import img3 from '../../image/image3.jpg'
import img4 from '../../image/image4.jpg'
import img5 from '../../image/image5.jpg'
import img6 from '../../image/image6.jpg'
import img7 from '../../image/image7.jpg'
import img8 from '../../image/image8.jpg'
import img9 from '../../image/image9.jpg'





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
    console.warn(imgSrc);
    setTempImgSrc(imgSrc);
    setModel(true);



   

  }

 
  
 
  return (
  
    <div className='gallery'>
      <div className={model? "model open":"model"}>
       
      <img  src={tempImgSrc} alt='temp'/>
      </div>
      
    
      <div className='gallery2'> 
      
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
    
  )
}


export default Gallery