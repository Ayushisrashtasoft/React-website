import React from 'react'
import "./Button.scss";

function Button({buttonName, buttonClass, btnFunction}) {
  return (
    <>
    <button type="button" className={`btn comman-button ${buttonClass}`} onClick={btnFunction}>{buttonName}</button>
    
    </>
  )
}

export default Button