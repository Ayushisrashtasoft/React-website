import React from 'react'
import "./Footer.scss"
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 ">
                            <img src={require("../../images/logo.png")} alt="" className="footer-logo" />
                            <div className="copyright">
                                <p>©2025<span>RooMedia.</span></p>
                                <p>Made with by HasThemes</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="contact-details">
                                <ul>
                                    <li className="footer-contact">contact</li>
                                    <li>
                                        258 Orchad St, London, United Kingdom
                                    </li>
                                    <li>hello@roomedia.com</li>
                                    <li>(605) 230-5253</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 footer">
                            <div className='footer-details'>
                                <ul>
                                    <div className="d-flex footer-link">
                                  <li><NavLink to="/home" className="nav-link">HOME</NavLink></li>  
                                        <li><NavLink to="/pages" className="nav-link">PAGES</NavLink></li>
                                        <li><NavLink to="/services" className="nav-link">SERVICES</NavLink></li>
                                        <li><NavLink to="/project" className="nav-link">PROJECTS</NavLink></li>
                                        
                                    </div>
                                </ul>
                            </div>
                            <div className='footer-icon'>
                                <ul>
                                    <div className="d-flex footer-icons">
                                        <li><i class="bi bi-facebook"></i></li>
                                        <li><i class="bi bi-twitter"></i></li>
                                        <li><i class="bi bi-instagram"></i></li>
                                        <li><i class="bi bi-telegram"></i></li>
                                    </div>
                                </ul>
                            </div>
                        </div>


                    </div>

                </div>
                <div className="footer-img">
                    <img src={require("../../images/shape/foooter-img.png")} alt=""/>
                </div>
            </div>
            
        </>
    )
}

export default Footer