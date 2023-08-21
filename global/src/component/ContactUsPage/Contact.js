import React from 'react'


import proccesswide from "../../assets/images/contact3.jpg";
import processlong from "../../assets/images/contact6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faPeopleGroup,
  faUserGroup,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import MainButton from "../button/button";


function ContactHeader() {

  
  const isSmallDevice = window.innerWidth <= 480;
  // let smallDevices = {
  //   backgroundImage: `url(${processlong})`,
  // };

  let containerStyle = {
    backgroundImage: `url(${isSmallDevice ? processlong : proccesswide})`,
    height: `${isSmallDevice ? '400px' : '400px'}`,
    width: "100vw",
  };


  return (
  
    <div className="container mb-16 h-auto">
      <div
        className="relative bg-dark md:bg-[center_top_-0rem] lg:bg-[center_top_-7rem] bg-cover py-16 lg:py-32 "
        style={containerStyle}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-5"></div>
        <div className='flex justify-center items-center my-auto h-full'>
          <h2 className="w-full text-center text-4xl text-white mx-auto   md:text-6xl lg:text-6xl z-10 relative">
            Contact Us
          </h2>
        </div>
      </div>
    </div>
  );
}


export default ContactHeader