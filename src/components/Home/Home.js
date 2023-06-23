<<<<<<< HEAD
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'
import {GiHamburgerMenu} from "react-icons/gi"
// import Modal from 'react-bootstrap/Modal'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Home() {
  const navigate=useNavigate()
//   const [isOpen, setIsOpen] = useState(false)
//   const clickHamburger = () => {
//     setIsOpen(!isOpen)
//   }

//   const handleClose = () => {
//     setIsOpen(!isOpen)
//   }
  return (
    <>
    <div className="headerContainer">
              <div className="headerLogoContainer">
              <img src="https://res.cloudinary.com/dufx8zalt/image/upload/v1687419355/logoimage1_krvkbq.png" alt="logo" style={{height:'50px', width:'100px', borderRadius:'10px'}}/>
              </div>
              <div className="desktopHeaderNavbarContainer">
              <p onClick={()=>navigate('/')} className='headerNavbarLink'>Home</p>
              <p onClick={()=>navigate('/studentLogin')} className='headerNavbarLink'>Student</p>
              <p onClick={()=>navigate('/adminLogin')} className='headerNavbarLink'>Admin</p>
              </div>
              <div className="mobileHeaderNavbarContainer">
              
              <Popup trigger={<button  className="hamburger-btn"><GiHamburgerMenu /></button>} position="bottom" className="mobile-hamburger-menu-container">
              <div className="mobile-hamburger-menu-container">
              <ul className="mobile-hamburger-menu">
                <li onClick={()=>navigate('/')} className='headerNavbarLink'>Home</li>
                <li onClick={()=>navigate('/studentLogin')} className='headerNavbarLink'>Student</li>
                <li onClick={()=>navigate('/adminLogin')} className='headerNavbarLink'>Admin</li>
                </ul>
                </div>
  </Popup>
              </div>
              </div>
    
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'300px'}}>
            KLOC HIREME
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Home() {
  const navigate = useNavigate();
  const [hamburgerActiveStatus, setHamburgerActiveStatus] = useState(false);
  return (
    <>
      <div className='headerContainer'>
        <div className='headerLogoContainer'>
          <img
            src='https://res.cloudinary.com/dufx8zalt/image/upload/v1687419355/logoimage1_krvkbq.png'
            alt='logo'
            style={{ height: "50px", width: "100px", borderRadius: "10px" }}
          />
>>>>>>> e7f6264a1868f8e6392b96665d9c20b1be6ee757
        </div>
        <div className='desktopHeaderNavbarContainer'>
          <p onClick={() => navigate("/")} className='headerNavbarLink'>
            Home
          </p>
          <p
            onClick={() => navigate("/studentLogin")}
            className='headerNavbarLink'
          >
            Student
          </p>
          <p
            onClick={() => navigate("/adminLogin")}
            className='headerNavbarLink'
          >
            Admin
          </p>
        </div>
        <div className='mobileHeaderNavbarContainer'>
          <GiHamburgerMenu
            onClick={() => setHamburgerActiveStatus(!hamburgerActiveStatus)}
          />
          {hamburgerActiveStatus && (
            <ul classsName='mobileHomeHamburgerMenu'>
              <li>Home</li>
              <li>Student</li>
              <li>Admin</li>
            </ul>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "300px",
        }}
      >
        KLOC HIREME
      </div>
    </>
  );
}

export default Home;
