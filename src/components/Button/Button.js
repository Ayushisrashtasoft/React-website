import React from 'react'
import "./Button.scss";

function Button({buttonName, buttonClass}) {
  return (
    <>
    <button type="button" className={`btn comman-button ${buttonClass}`}>{buttonName}</button>
    
    </>
  )
}

export default Button