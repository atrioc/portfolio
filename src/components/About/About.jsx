import React from 'react'
import "./about.css"
import Card from "../cards/cards.jsx"
import {motion} from  "framer-motion"
import a_d from "./a-d.svg"
import dd from "./dd.svg"

const About = () => {
  const transition= {duration:2,type:"spring"}
  return (
    <>
    <div id="about" className='cards'>
      <div className="a-left">
        <motion.div 
        initial={{ left:"-22rem" }}
        whileInView={{ left:"-11%" }}
        transition={{duration:1,type:"spring"}}>
          <Card
          head={"UX/UI"} 
          details={" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum consequat nisl vel pretium lectus quam. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Eget sit amet tellus cras adipiscing enim eu turpis."}
          />
        </motion.div>
          <span>About Me..</span>
          
      </div>
      {/* <img className="dd" src={dd} alt="sd"></img> */}
      <div className="a-middle">
      <motion.div 
        initial={{ left:"-22rem" }}
        whileInView={{ left:"-11rem" }}
        transition={transition}>
       <Card 
       head={"Data Science"} 
       details={" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum consequat nisl vel pretium lectus quam. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Eget sit amet tellus cras adipiscing enim eu turpis."} 
             />
      </motion.div>
      </div>
      <div className='a-right'>
      <motion.div 
        initial={{ left: "14rem" }}
        whileInView={{ right: "11rem" }}
        transition={transition}>
         <Card 
           head={"Frontend Development"} 
           details={" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum consequat nisl vel pretium lectus quam. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Eget sit amet tellus cras adipiscing enim eu turpis."}
         />
      </motion.div>
        </div>
       </div>
  
    </>
  )
}

export default About