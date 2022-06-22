import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Circles} from  'react-loader-spinner'

const AppLoader=()=> {
  return (
    <div className='apploading'>
      <div className="text-white">
       <Circles height="45" width="45" color=" #D1D1D1" ariaLabel='loading'/>
      </div>
      
    </div>
  )
}
export default AppLoader;