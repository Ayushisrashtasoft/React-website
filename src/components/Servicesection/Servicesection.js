import React from 'react'
import "./Service.scss"
import service1 from "../../images/icons/s01.png"
import service2 from "../../images/icons/s02.png"
import service3 from "../../images/icons/s03.png"
import service4 from "../../images/icons/s04.png"
import service5 from "../../images/icons/s05.png"
import service6 from "../../images/icons/s06.png"
import Title from '../Title/Title'


function Servicesection() {
    const services = [
        {
            image: service1, title: "Organic Search (SEO)", desc: "Stop selling. Start helping. Utilize SEO to capture early stage awareness queries through relevant content", num: "01"
        },
        {
            image: service2, title: "Link Building Services", desc: "Stop selling. Start helping. Utilize SEO to capture early stage awareness queries through relevant content", num: "02"
        },
        {
            image: service3, title: "Paid Search (PPC)", desc: "Stop selling. Start helping. Utilize SEO to capture early stage awareness queries through relevant content", num: "03"
        },
        {
            image: service4, title: "SEO Auditing Services", desc: "Stop selling. Start helping. Utilize SEO to capture early stage awareness queries through relevant content", num: "04"
        },
        {
            image: service5, title: "B2B SEO Services", desc: "Stop selling. Start helping. Utilize SEO to capture early stage awareness queries through relevant content", num: "05"
        },
        {
            image: service6, title: "Full Service SEO", desc: "Stop selling. Start helping. Utilize SEO to capture early stage awareness queries through relevant content", num: "06"
        },
    ]

    return (
        <>
            <div className="services-bg">
                <div className='container py-5'>
                    <div className="service-title">
                        <Title boldTitle={"Best services for you"} title={"for you"} />
                    </div>
                    <div className="service-container">


                        {services.map((data, index) => (
                            <div className="single-service position-relative" key={index} >

                                <img src={data.image} alt="" />
                                <h4>{data.title}</h4>
                                <p>{data.desc}</p>
                                <span>{data.num}</span>

                            </div>
                        ))}

                    </div>

                </div>
            </div>

        </>
    )
}

export default Servicesection