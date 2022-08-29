import "./windows.css"

import React from 'react'

const Windows = ({url}) => {
  return (
    <div className="windows">
      <div className="w-container">
        <img className="w-size" src={url} alt="ghd"></img>

      </div>

    </div>
  )
}

export default Windows