import React from 'react'
import Title from '../Title/Title'
import Button from '../Button/Button'
import "./Hersosection.scss"


function Herosection() {
    return (
        <>
            <div className='hero-wrap position-relative'>
                <div className="container">
                    <div className='text-center herosection-title'>
                        <Title boldTitle={"INCREASE TRAFFIC"} title={"FOR YOUR WEBSITE"} />
                        <p>Bring more traffic to your website with the help of new <br></br>
                            proven techniques I can offer</p>
                    </div>
                    <div>
                        <form className='contact-form'>
                            <input type="text" className="form-control" placeholder='wwww.example.com' />
                            <input type="text" className="form-control" placeholder='sample@domain.com' />
                            <Button buttonName={"ANALYZE"} buttonclassName={"fw-sm-100"} />
                        </form>
                    </div>
                    <div className='herosection-img'>
                        <img src={require("../../images/01.jpg")} alt=""/>
                    </div>
                </div>
                <div className='animation'>
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                    <div className="circle-three"></div>
                    <div className="circle-four"></div>
                    <div className="circle-five"></div>
                    <div className="circle-six"></div>
                    <div className="circle-seven"></div>
                    <div className="circle-eight"></div>
                </div>
            </div>
        </>
    )
}

export default Herosection