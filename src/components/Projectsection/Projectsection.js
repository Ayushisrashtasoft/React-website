import React from 'react'
import Title from '../Title/Title'
import "./projectsection.scss"

function Projectsection() {
    return (
        <div className="project-bg">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 project-title'>
                        <Title boldTitle={"our latest"} title={"projects"} />
                    </div>

                </div>

                <div className='row'>
                    <div className='col-md-6 d-flex align-items-center px-md-0'>
                        <div className='project-item position-relative w-100'>
                            <img src={require("../../images/portfolio/h01.png")} alt="" className='w-100' />
                            <div className="project-details">
                                <h6>
                                    Adventure seo website
                                </h6>
                                <h5>
                                    social website
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 ps-md-0'>
                        <div className='project-item position-relative w-100'>
                            <img src={require("../../images/portfolio/h02.png")} alt="" className='w-100' />
                            <div className="project-details">
                                <h6>
                                    High Fashion fairvine
                                </h6>
                                <h5>Social media</h5>
                            </div>
                        </div>
                        <div className='project-item position-relative'>
                            <img src={require("../../images/portfolio/h03.png")} alt="" className='w-100' />
                            <div className="project-details">
                                <h6>
                                    High Fashion fairvine
                                </h6>
                                <h5>Social media</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projectsection