import React from 'react'
import Windows from "../windows/Windows.jsx"
import "./project.css"
import pro from "./pro.png"
import p_d from "./p-d.svg"
// import shoopingcart from "../../assets"
import shopimg from "./shoopingcart.png"
const Project = () => {
  
  return (
    <div>
    <section id='project'>
    <Windows url={pro}/>
    <Windows url={pro}/>
    <Windows url={shopimg}/>
    <Windows url={shopimg}/>
    <Windows url={shopimg}/>
    <Windows url={shopimg}/>
    <Windows url={shopimg}/>
    <Windows url={shopimg}/>
    <div className='p-wrapper'>Project i Undertook</div>
    <img className="p-d" src={p_d} alt="df"></img>
    </section>
    
    </div>
  )
}

export default Project