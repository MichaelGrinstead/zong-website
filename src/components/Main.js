import React from 'react'
import Menu from './Menu.js'
import serpentSingle from '../serpent-single.jpg'

 

const Main = () => {
  return (
    <div className= 'Main'>

      <Menu/>

      <img className='Serpent-single' src={serpentSingle} />
  
      <h1 className= 'Serpent-single-title'>New Single "The Serpent" Out Now</h1>

    </div>
  )
}

export default Main