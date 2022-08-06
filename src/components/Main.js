import React from 'react'
import serpentSingle from '../serpent-single.jpg'
import { IoIosMenu } from 'react-icons/io'
 

const Main = () => {
  return (
    <div className= 'Main'>

      <IoIosMenu className= 'Mobile-Menu'/>

      <div className= 'Menu'>
          <h3>Home</h3>
          <h3>Tour</h3>
          <h3>Merch</h3>
          <h3>Media</h3>
          <h3>About</h3> 
          
      </div>


      <h1 className= 'Serpent-single-title'>New Single "The Serpent" Out Now</h1>

      <img className='Serpent-single' src={serpentSingle} />
    </div>
  )
}

export default Main