import React from 'react'
import "./about.css"
import Card from "../cards/cards.jsx"
// import {motion} from  "framer-motion"
// import a_d from "./a-d.svg"
// import dd from "./dd.svg"

const About = () => {
  // const transition= {duration:2,type:"spring"}
  return (
    <>
    <div id="about" className='cards'>
      <div className="a-left">
        
          <Card
          head={"UX/UI"} 
          details={" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum consequat nisl vel pretium lectus quam. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Eget sit amet tellus cras adipiscing enim eu turpis."}
          />
        
          <span>About Me..</span>
          
      </div>
      {/* <img className="dd" src={dd} alt="sd"></img> */}
      <div className="a-middle">
      
       <Card 
       head={"Data Science"} 
       details={" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum consequat nisl vel pretium lectus quam. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Eget sit amet tellus cras adipiscing enim eu turpis."} 
             />
      
      </div>
      <div className='a-right'>
      
         <Card 
           head={"Frontend Development"} 
           details={" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum consequat nisl vel pretium lectus quam. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Eget sit amet tellus cras adipiscing enim eu turpis."}
         />
      
        </div>
       </div>
  
    </>
  )
}

export default About