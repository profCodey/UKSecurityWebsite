import React from "react";

function PageHeader({imgPotrait, imgLandscape, title}) {
  return (
    <div className="container">
      <div
        className="relative bg-cover bg-center w-screen bg-dark bg-[center_top_-5rem] z-1 md:hidden "
        style={{ backgroundImage: `url(${imgPotrait})`, height: "360px" }}
      >
        <div className="flex flex-row justify-center items-center h-full">
                  <h1 className="text-5xl text-white z-10">{title}</h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-40 z-5"></div>
      </div>

      <div
        //medium screen
        className="relative hidden md:block md:bg-cover md:bg-center md:w-screen md:bg-dark lg:hidden
        md:bg-[center_top_-3rem]
    
        "
        style={{ backgroundImage: `url(${imgLandscape})`, height: "400px" }}
      >
        <div className="flex flex-row justify-center items-center h-full">
                  <h1 className="text-6xl text-white z-10">{title}</h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-40 z-5"></div>
      </div>
      <div
        //large screen
        className="relative hidden md:hidden lg:block l lg:w-screen lg:bg-dark 
        lg:bg-[center_top_-3rem] bg-cover bg-cover "
        style={{ backgroundImage: `url(${imgLandscape})`, height: "440px", width: "100vw"}}
      >
        <div className="flex flex-row justify-center items-center h-full">
                  <h1 className="text-7xl text-white z-10">{title}</h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-70 z-5"></div>
          </div>
        
    </div>
  );
}

export default PageHeader;
