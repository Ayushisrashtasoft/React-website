import React from 'react'
import './Testimonial.scss'
import Slider from "react-slick";


function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-6'>
                        <h2 className='testimonial-title'>
                            <div className='title'>
                                <span>WHAT OUR CLIENTS</span> SAY ABOUT US
                            </div>
                            <div className="icon position-realtive">
                                <img src={require('../../images/icons/quote.webp')} alt="" />
                                <img src={require('../../images/shape/t01.png')} alt="" className="icon-shape" />
                            </div>
                        </h2>
                    </div>
                    <div className='col-xl-6'>
                        <Slider {...settings}>
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial