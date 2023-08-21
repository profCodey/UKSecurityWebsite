import React from "react";
import imageURL from "../../assets/images/aboutLandscape.jpg";
import landscapeImage from "../../assets/images/aboutLandscape.jpg";
import portaitImage from "../../assets/images/aboutPotrait2.jpg";

function AboutUsHeader() {
  return (
    //small screen
    <div className="container">
      <div
        className="relative bg-cover bg-center w-screen bg-dark bg-[center_top_-5rem] z-1 md:hidden "
        style={{ backgroundImage: `url(${portaitImage})`, height: "360px" }}
      >
        <div className="flex flex-row justify-center items-center h-full">
          <h1 className="text-5xl text-white z-10">About Us</h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-40 z-5"></div>
      </div>

      <div
        //medium screen
        className="relative hidden md:block md:bg-cover md:bg-center md:w-screen md:bg-dark lg:hidden
        md:bg-[center_top_-3rem]
    
        "
        style={{ backgroundImage: `url(${landscapeImage})`, height: "400px" }}
      >
        <div className="flex flex-row justify-center items-center h-full">
          <h1 className="text-6xl text-white z-10">About Us</h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-40 z-5"></div>
      </div>
      <div
        //large screen
        className="relative hidden md:hidden lg:block l lg:w-screen lg:bg-dark 
        lg:bg-[center_top_-7rem] "
        style={{ backgroundImage: `url(${landscapeImage})`, height: "440px" }}
      >
        <div className="flex flex-row justify-center items-center h-full">
          <h1 className="text-7xl text-white z-10">About Us</h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-5"></div>
      </div>
    </div>
  );
}

export default AboutUsHeader;


