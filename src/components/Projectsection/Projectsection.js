import React from 'react'
import "./projectsection.scss"

function Projectsection() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 project-title'>
                    <h2 className="title">
                        <span>Our latest</span>
                        project
                    </h2>
                </div>

            </div>
            {/* <div className='row'>
                <div className='col-lg-6 d-flex align-items-center'>
                    <img src={require("../../images/portfolio/h01.png")} alt="" />
                </div>
                <div className='col-lg-6'>
                    <img src={require("../../images/portfolio/h02.png")} alt=""/>
                    <div className="project-info">

                    </div>
                    <img src={require("../../images/portfolio/h03.png")} alt=""/>
                </div>
            </div> */}


            <div className='row'>
                <div className='col-lg-6'>
                    
                        <div className='project-item position-relative'>
                            <img src={require("../../images/portfolio/h01.png")} alt="" />
                            <div className="project-details">
                            <h6 className="project-title">
                                Adventure seo website
                            </h6>
                            <h5>
                                social website
                            </h5>
                            </div>
                        </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Projectsection