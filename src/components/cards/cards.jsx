import "./cards.css"

import React from 'react'

const cards = ({head,details}) => {
  return (
      <div className="container">
          <span>{head}</span>
          <span>{details}</span>
          
        </div>
  )
}

export default cards