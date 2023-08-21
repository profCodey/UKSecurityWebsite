import React from "react";
// import HomeBanner from "../../../assets/images/homeBanner.jpg";
import HomeBanner from "../../../assets/images/hearderImg1.jpg";
import "./header.css";
import MainButton from "../../button/button";

function Header() {
  return (
    <div className="banner">
      <div className="bannerImg">
        <img src={HomeBanner} alt="Website Banner" />
      </div>
      <div className="banner-text">
        <h1>
          Global Total <br /> Security Limited{" "}
        </h1>
        <p>Excellence in Door Supervisory Services</p>
        <div style={{ marginTop: "30px" }}>
          <MainButton text="Get Quote" />
        </div>
      </div>
    </div>

  );
}

export default Header;

// import React from "react";
// import HomeBanner from "../../../assets/images/homeBanner.jpg";
// import "./header.css";
// import MainButton from "../../button/button";
// import proccesswide from "../../../assets/images/mainHeader.jpg";
// import processlong from "../../../assets/images/contact6.jpg";

// function Header() {
//   const isSmallDevice = window.innerWidth <= 480;

//   let containerStyle = {
//     backgroundImage: `url(${isSmallDevice ? processlong : proccesswide})`,
//     height: `${isSmallDevice ? "400px" : "500px"}`,
//     width: "100vw",
//   };
//   return (
//     <div className="container mb-16 h-auto">
//       <div
//         className="relative bg-dark md:bg-[center_top_-0rem] lg:bg-[center_top_-22rem] bg-cover py-16 lg:py-32 "
//         style={containerStyle}
//       >
//         <div className="absolute inset-0 bg-black opacity-40 z-5"></div>
//         <div className="ml-44">
//           <div className="flex justify-center items-center my-auto h-full">
//             <h2 className="w-full text-left text-4xl text-white mx-auto   md:text-6xl lg:text-9xl z-10 relative ">
//               Global Total <br /> Security Limited{" "}
//             </h2>
//             <p className="text-left">Excellence in Door Supervisory Services</p>
//           </div>
//           <div className="z-100 relative" style={{ marginTop: "30px" }}>
//             <MainButton text="Get Quote" />{" "}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
