import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import "./Navbar.scss";
// import Modal from "../components/Modal/Modal";

function Navbar() {


  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

// const [openModal, setOpenModal] = useState(false);


// const handleModal = () => {
//   setOpenModal(!openModal)
// }






  return (
    <>

      <nav className={`navbar navbar-expand-lg p-0  ${(scrollPosition >= 60) ? "activeBg" : ""}`}>
        <div className="container header justify-content-center ">
          <div id="navbarSupportedContent" className="collapse navbar-collapse overlay-close" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          </div>
          <div className="row w-100 align-items-center">
            <div className="col-7 col-sm-4 col-md-4 col-lg-2">
              {/* <a className="navbar-brand" href="#">Navbar</a> */}
              <img
                src={require('../images/logo.png')}
                className="header-logo" alt=""
              />
            </div>


            <div className="col-5 col-sm-8 col-md-8 col-lg-10 d-flex align-items-center justify-content-end">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <div className="toggler-icon1"></div>
                <div className="toggler-icon2"></div>
                <div className="toggler-icon3"></div>

              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-close-button">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    X


                  </button>
                </div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink to="/home" className="nav-link">HOME</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/pages" className="nav-link">PAGES</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/services" className="nav-link">SERVICES</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/project" className="nav-link">PROJECTS</NavLink>
                  </li>
                  

                </ul>

              </div>
              <div className="d-none d-sm-block">
                <Button buttonName={"Free cunsltaion"} />
              </div>
            </div>

          </div>

        </div>

      </nav>
      <div >
      {/* <Modal handleMdl={openModal}/> */}
      </div>
    </>
  );
}

export default Navbar;
