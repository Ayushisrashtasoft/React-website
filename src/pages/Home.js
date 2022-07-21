import React from 'react'
import Herosection from '../components/Herosection/Herosection'
import Contactsection from '../components/Contactsection/Contactsection'
import Aboutsection from '../components/About/Aboutsection'
import Servicesection from '../components/Servicesection/Servicesection'
import Servicedetails from '../components/Servicedetails/Servicedetails'
import Projectsection from '../components/Projectsection/Projectsection'
import Testimonial from '../components/Testimonial/Testimonial'
import Packagesection from '../components/Packagesection/Packagesection'

function Home() {
  return (
    <>
    <div className="footer-space">
    <Herosection/>
    <Contactsection />
    <Aboutsection/>
    <Servicesection/>
    <Servicedetails/>
    <Projectsection/>
    <Testimonial/>
    <Packagesection/>

    </div>
    </>
  )
}

export default Home