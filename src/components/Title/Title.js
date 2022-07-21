import React from 'react'
import "./Title.scss"

function Title({boldTitle,title}) {
  return (
    <>
    <h2 className="title"><b>{boldTitle}</b> {title}</h2>
    </>
  )
}

export default Title
