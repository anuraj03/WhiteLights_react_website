import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {TailSpin} from  'react-loader-spinner'

const Loader=()=> {
  return (
    <div className='container2'>
      <div className="text-white">
       < TailSpin height="40" width="40" color="White " ariaLabel='loading'/>
      </div>
      
    </div>
  )
}
export default Loader;
