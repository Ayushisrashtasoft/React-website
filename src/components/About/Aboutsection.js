import React from 'react'
import Title from "../Title/Title"
import Button from '../Button/Button'
import "./Aboutsection.scss"

function Aboutsection() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 about-img" >
                        <img src={require("../../images/about/01.png")} alt="" />
                    </div>
                    <div className="col-lg-6 about-title">
                        <Title about={"about"} abouttitle={"roomedia"} />
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Who We Are
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>RooMedia is a Search Engine Marketing Company providing ser vices to Small & Medium size Businesses to grow and get more and more online traffic towards their websites. We bring advanced online marketing from the major cities to businesses right here</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       Our Mission
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>RooMedia is a Search Engine Marketing Company providing ser vices to Small & Medium size Businesses to grow and get more and more online traffic towards their websites. We bring advanced online marketing from the major cities to businesses right here</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       Our Vission
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                       <p>RooMedia is a Search Engine Marketing Company providing ser vices to Small & Medium size Businesses to grow and get more and more online traffic towards their websites. We bring advanced online marketing from the major cities to businesses right here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button buttonName={"more about us"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutsection