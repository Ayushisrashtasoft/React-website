import React from 'react'
import "./Title.scss"

function Title({boldTitle,title,about,abouttitle}) {
  return (
    <>
    <h2 className="title"><b>{boldTitle}{about}</b> {title}{abouttitle}</h2>
    </>
  )
}

export default Title
