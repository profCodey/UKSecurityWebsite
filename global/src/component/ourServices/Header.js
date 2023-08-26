import React from 'react'
import PageHeader from '../pageHeader'
import doorPotrait from '../../assets/images/doorPotrait.jpg'
import doorland from "../../assets/images/doorland2.jpg";

function Header() {
  return (
    <div>
      <PageHeader
        imgPotrait={doorPotrait}
        imgLandscape={doorland}
        title="Services"
      />

      <div>
        <h2 className="text-4xl text-[#001f41] w-3/4 mx-auto text-center md:text-5xl lg:text-6xl lg:w-1/2 mt-32">
          Check Out Our Comprehensive Door Supervisory Services{" "}
        </h2>
        <p className="text-center w-4/5 mx-auto text-2xl mt-8 lg:w-1/2 lg:text-2xl lg:leading-relaxed">
          At Global Total Security, we take pride in offering a range of bespoke
          door supervisory solutions tailored to meet the unique security needs
          of various establishments. With a focus on professionalism and
          customer-centricity, we provide reliable security solutions that
          elevate both security standards and peace of mind. Explore our
          comprehensive suite of services designed to safeguard your premises,
          enhance crowd management, and provide swift response in any situation.
          From access control management to vigilant surveillance, our services
          are meticulously designed to maintain a secure environment without
          compromising the welcoming atmosphere your patrons expect.
        </p>
        <p className="text-center w-4/5 mx-auto text-2xl mt-10 lg:w-1/2 lg:text-2xl lg:leading-relaxed lg:mt-16 ">
          Discover how Global Total Security can transform your security
          strategy and ensure a safe and enjoyable experience for all.
        </p>
      </div>
    </div>
  );
}

export default Header

// Path: global/src/component/ourServices/OurServices.js tell themdatdad
