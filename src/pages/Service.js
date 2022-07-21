import React from 'react'
import Packagesection from '../components/Packagesection/Packagesection'
import Servicedetails from '../components/Servicedetails/Servicedetails'
import Servicesection from '../components/Servicesection/Servicesection'
import Testimonial from '../components/Testimonial/Testimonial'

function Services() {
  return (
    <div className="footer-space">
    <Servicedetails/>
    <Servicesection/>
    <Packagesection/>
    <Testimonial/>
    
    </div>
  )
}

export default Services