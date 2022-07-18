import React from 'react'
import Herosection from '../components/Herosection/Herosection'
import Contactsection from '../components/Contactsection/Contactsection'
import Aboutsection from '../components/About/Aboutsection'
import Servicesection from '../components/Servicesection/Servicesection'
import Servicedetails from '../components/Servicedetails/Servicedetails'
import Projectsection from '../components/Projectsection/Projectsection'
// import Testimonial from '../components/Testimonial/Testimonial'

function Home() {
  return (
    <>
    <div>
    <Herosection/>
    <Contactsection />
    <Aboutsection/>
    <Servicesection/>
    <Servicedetails/>
    <Projectsection/>
    {/* <Testimonial/> */}
    </div>
    </>
  )
}

export default Home