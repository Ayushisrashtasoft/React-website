import React from 'react'
import "./Servicedetails.scss"

function Servicedetails() {
    return (
        <>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='services-item'>
                            <div className="counter">
                                <h2>3254+</h2>
                            </div>
                            <div className='services-title'>
                                <p>Completed Projects</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='services-item'>
                            <div className="counter">
                                <h2>59</h2>
                            </div>
                            <div className='services-title'>
                                <p>Award Winner</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='services-item'>
                            <div className="counter">
                                <h2>234k</h2>
                            </div>
                            <div className='services-title'>
                                <p>Worldwide Users</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='services-item'>
                            <div className="counter">
                                <h2>825</h2>
                            </div>
                            <div className='services-title'>
                                <p>Satisfied Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Servicedetails