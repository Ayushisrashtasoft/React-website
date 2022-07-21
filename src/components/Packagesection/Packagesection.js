import React from 'react'
import Title from '../Title/Title'
import "./Packagesection.scss"
import Button from '../Button/Button'

function Packagesection() {
  return (
    <>
    <div className="package-section">
      <div className='container pt-5 package-wrapper'>
        <div className=" package-title">
        <Title boldTitle={"kick-start"} title={"with an affordable"} />
        </div>
        {/* <ul className="nav nav-tabs position-relative" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">MONTHLY</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">ANNUAl</button>
          </li>
          <div className='active-bg'></div>

        </ul> */}




        {/* <div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
</div> */}
        <div className='package-container'>
          <div className='single-package'>
            <h6>Entrepreneur</h6>
            <img src={require("../../images/photos/pricing-v01.png")} alt="" className="package-img" />
            <div className="pricing-ammount">
              <h4>
                <sup>$</sup>
                29
                <span>/Annual</span>
              </h4>
            </div>
            <div class="pricing-content">
              <ul class="pricing-list text-center list-unstyled">
                <li>25 Analytics Compaign</li>
                <li>1,300Change Keywords</li>
                <li>1 Free Optimization</li>
                <li>24/7 support</li>
              </ul>
            </div>
            <div className='package-btn'>
            <Button buttonName={"start now"} buttonClass={"gray-btn"}/>
            </div>
          </div>
          <div className='single-package popular-package'>
            <h6>Growing Business</h6>
            <img src={require("../../images/photos/pricing-v02 (2).png")} alt=""  className="package-img"/>
            <div className="pricing-ammount">
              <h4>
                <sup>$</sup>
                59
                <span>/Annual</span>
              </h4>
            </div>
            <div class="pricing-content">
              <ul class="pricing-list text-center list-unstyled">
              <li>80 Analytics Compaign</li>
                        <li>1,500Change Keywords</li>
                        <li>3 Free Optimization</li>
                        <li>24/7 support</li>
              </ul>
            </div>
            <div className='package-btn'>
            <Button buttonName={"start now"} />
            </div>
          </div>
          <div className='single-package'>
            <h6>Pro Business</h6>
            <img src={require("../../images/photos/pricing-v03.png")} alt="" className="package-img" />
            <div className="pricing-ammount">
              <h4>
                <sup>$</sup>
                99
                <span>/Annual</span>
              </h4>
            </div>
            <div class="pricing-content">
              <ul class="pricing-list text-center list-unstyled">
              <li>100 Analytics Compaign</li>
                        <li>2,300Change Keywords</li>
                        <li>10 Free Optimization</li>
                        <li>24/7 support</li>
              </ul>
            </div>
            <div className='package-btn'>
            <Button buttonName={"start now"} buttonClass={"gray-btn"}/>
            </div>
          </div>

        </div>
        </div>
      </div>
    </>
  )
}

export default Packagesection