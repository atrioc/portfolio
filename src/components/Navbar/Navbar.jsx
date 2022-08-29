import React from 'react'
import "./navbar.css"
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { TiContacts } from 'react-icons/ti';
import { VscProject } from 'react-icons/vsc';
const Navbar = () => {
  
const[activenav, setActiveNav] =React.useState("#")

  
  return (

    <nav>
      <a href="#" 
      className={activenav === "#" ? "active" : ""} 
      onClick={()=>{setActiveNav("#")}}>
        <AiOutlineHome/> 
      </a>
      <a href="#about" 
      className={activenav === "#about" ? "active" : ""} 
      onClick={()=>{setActiveNav("#about")}}>
        <AiOutlineUsergroupDelete/> 
      </a>
      <a href="#project" 
      className={activenav === "#project" ? "active" : ""} 
      onClick={(()=>{setActiveNav("#project")})}>
        <VscProject/> 
      </a>
      <a href="#contact" 
      className={activenav === "#contact" ? "active" : ""} 
      onClick={()=>{setActiveNav("#contact")}}>
        <TiContacts/> 
      </a>
    </nav>
  )
}

export default Navbar