import React from 'react'
import {RiFacebookCircleLine} from 'react-icons/ri'
import {IoLogoInstagram} from 'react-icons/io'
import { IoIosMenu } from 'react-icons/io'
import zonglogo from '../zong-logo.png'


const Header = () => {
  return (

    <div>
      
      <img className= 'Zong-logo' src= {zonglogo}/>

      <div className= 'Header-menu'>
        <RiFacebookCircleLine className= 'Social-icon'/>
        <IoLogoInstagram className= 'Social-icon'/>
        <IoIosMenu className= 'Mobile-Menu'/>
      </div>

    </div>
   
    
  )
}

export default Header