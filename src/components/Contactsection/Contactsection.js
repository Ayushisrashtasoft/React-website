import React from 'react'
import "./Contactsection.scss"

function Contactsection() {
    return (
        <>
            <div className="contact-bg">
                <div className='container py-5'>
                    <div className='row'>

                        <div className='col-lg-6 d-flex contact-call-wrap'>
                            <div className="contact-call-icon">
                                <img src={require("../../images/call.png")} alt="" className='contact-call-img' />
                            </div>
                            <div className='content'>
                                <h5>contact us<br></br>by phone</h5>
                                <h4>(605)230-5253</h4>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6'>
                            <div className="contact-info">
                                <img src={require("../../images/icons/01.png")} alt="" className='contact-img' />
                                <div>
                                    <h5>Email message</h5>
                                    <h6>hello@roomedia.com</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6'>
                            <div className="contact-info">
                                <img src={require("../../images/icons/02.png")} alt="" className='contact-img' />

                                <div>
                                    <h5>open hours</h5>
                                    <h6>mon-sat:8:00am-5:00pm</h6>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactsection