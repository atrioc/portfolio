import React from 'react'
import { icons } from 'react-icons'
import "./header.css"
// import me from '.../assets/me.svg'
// import {terminal} from ".../assets/terminal.svg"
import {AiOutlineLinkedin} from 'react-icons/ai';
import {FaGithub} from "react-icons/fa";
import {FiTwitter} from "react-icons/fi"
import doodle from "./n-d.svg"

const Header = () => {
  return (
    <container id ="#"className="Header">
    <div className='left'>
     <h2>Hello there, My Name is</h2>
     <h3 className='wrapper'>
      <div className='n-animation'><span>K</span><span className='fontchange'>K</span></div>
      <div className='n-animation'><span>u</span><span className='fontchange'>u</span></div>
      <div className='n-animation'><span>n</span><span className='fontchange'>n</span></div>
      <div className='n-animation'><span>a</span><span className='fontchange'>a</span></div>
      <div className='n-animation'><span>l</span><span className='fontchange'>l</span></div>
      </h3>
     <div className="l-socials">
      <a href="#"><AiOutlineLinkedin/></a>
      <a href="#"><FaGithub/></a>
      <a href="#"><FiTwitter/></a>
    </div>
    </div>
    <div className='right'>
     <img className="r-d"width="90%"src={doodle} alt=""/>
    <a className="l-scroll" href="#contact" >Scroll Down ...</a>
    </div>
    </container>
  )
}

export default Header