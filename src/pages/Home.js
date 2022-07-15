import React from 'react'
import Herosection from '../components/Herosection/Herosection'
import Contactsection from '../components/Contactsection/Contactsection'
import Aboutsection from '../components/About/Aboutsection'
import Servicesection from '../components/Servicesection/Servicesection'

function Home() {
  return (
    <div>
    <Herosection/>
    <Contactsection />
    <Aboutsection/>
    <Servicesection/>
    </div>
  )
}

export default Home