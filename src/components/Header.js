import React from 'react'
import Menu from './Menu.js'
import Dropdown from './Dropdown.js'
import {RiFacebookCircleLine} from 'react-icons/ri'
import {IoLogoInstagram} from 'react-icons/io'
import { IoIosMenu } from 'react-icons/io'
import zonglogo from '../zong-logo.png'


const Header = () => {
  
  const [dropOn, setDropOn] = React.useState(false)

  const handleClick = () => {
    setDropOn(!dropOn)
  }

  console.log(dropOn)
  return (

    <div>
      
      <img className= 'Zong-logo' src= {zonglogo}/>

      <div className= 'Header-menu'>

        <RiFacebookCircleLine className= 'Social-icon'/>
        <IoLogoInstagram className= 'Social-icon'/>
        <IoIosMenu 
        className= 'Mobile-Menu'
        onClick= {handleClick}
        />
        
      </div>
      {dropOn ? <Dropdown/> : <></> }

      

    </div>
   
    
  )
}

export default Header