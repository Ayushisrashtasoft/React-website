import React from 'react'
import './Testimonial.scss'
import Slider from "react-slick";
import Title from '../Title/Title';



function Testimonial() {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="testimonial-bg">
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h2 className='testimonial-title'>
                                <div className='title'>
                                    <Title boldTitle={"Whats our client"} title={"says about us"} />
                                </div>
                                <div className="icon position-relative">
                                    <img src={require('../../images/icons/quote.webp')} alt="" />
                                    <img src={require('../../images/shape/t01.png')} alt="" className="icon-shape" />
                                </div>
                            </h2>
                        </div>
                        <div className='col-lg-6'>
                            <Slider {...settings}>
                                <div className="client-content">
                                    <p>
                                        “Chris Carroll is definitely an expert in digital marketing! He is always doing a great job
                                        and takes time to explain his thoughts and his process. He doesn't hesitate to share new ideas
                                        and be proactive all the time.”
                                    </p>
                                    <div className="client-details">
                                        <h4 className="client-info">Daniel Parrick</h4>
                                        <p className="designation">CEO Founder at Google Inc</p>
                                    </div>
                                </div>
                                <div className="client-content">
                                    <p>
                                        “Chris Carroll is definitely an expert in digital marketing! He is always doing a great job
                                        and takes time to explain his thoughts and his process. He doesn't hesitate to share new ideas
                                        and be proactive all the time.”
                                    </p>
                                    <div className="client-details">
                                        <h4 className="client-info">Daniel Parrick</h4>
                                        <p>CEO Founder at Google Inc</p>
                                    </div>
                                </div>
                                <div className="client-content">
                                    <p>
                                        “Chris Carroll is definitely an expert in digital marketing! He is always doing a great job
                                        and takes time to explain his thoughts and his process. He doesn't hesitate to share new ideas
                                        and be proactive all the time.”
                                    </p>
                                    <div className="client-details">
                                        <h4 className="client-info">Daniel Parrick</h4>
                                        <p>CEO Founder at Google Inc</p>
                                    </div>
                                </div>


                            </Slider>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial