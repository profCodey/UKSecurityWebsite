import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="w-full bg-[#001f41]">
      <div className="flex flex-col md:flex-row lg:flex-row sm:items-center lg:justify-center h-auto  m-auto gap-16 md:gap-1 lg:gap-20 py-16 md:w-4/5 ">
        <div className=" w-4/5 m-auto md:w-1/3 text-white w-1/4">
          <h2 className="text-2xl md:text-3xl">
            Global Total Security Limited
          </h2>
          <hr className="w-1/4 mb-8" />
          <p className="text-xl md:text-2xl text-justify">
            {" "}
            is a registered company in England and Wales, dedicated to providing
            exceptional door supervisory services. We are committed to upholding
            the highest standards of security and safety, in accordance with
            licensing regulations set by the Security Industry Authority (SIA)."{" "}
            <br />
            <p className="mt-6">
              "© NSI 2023 Insight Certification Ltd T/A National Security
              Inspectorate
            </p>
          </p>
        </div>

        <div className="mx-auto text-center md:text-left text-white flex flex-col w-full md:w-1/3  md:items-center gap-6">
          <h2 className="text-2xl md:text-3xl">Useful Links</h2>
          <ul className="list-none flex flex-col gap-8 lg:gap-4 ">
            {/* <li className="list-none">Home</li>
            <li className="list-none">Abu</li>
            <li className="list-none">Item 3</li> */}
            <li>
              <Link className="nav-link list-none text-xl" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link list-none text-xl" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="nav-link list-none text-xl" to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="nav-link text-xl" to="/services">
                Services
              </Link>
            </li>
            <li className="text-sm">
              <Link className="nav-link text-xl" to="/careers">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-3/4 mx-auto text-white text-xl text-center md:text-left flex flex-col gap-8 md:gap-4  md:w-1/3 md:justify-center">
          <h2 className="text-2xl  md:text-3xl">Get in Touch</h2>
          <div className="flex gap-6 items-center justify-center md:justify-left  md:text-left">
            <div className="md:pl-0 ">
              <FontAwesomeIcon className="icons" icon={faPhone} />
            </div>
            <div className="md:w-11/12">
              <p className="text-xl md:text-2xl">
                01 616 690 880, <br /> +44 7862038656, <br /> +44 7404 749549,{" "}
                <br /> +44 7878 251590
              </p>
            </div>
          </div>
          <div className=" flex gap-6 items-center justify-center md:justify-left">
            <div>
              <FontAwesomeIcon className="icons" icon={faLocationDot} />
            </div>
            <p className="text-xl md:text-2xl w-2/3 md:w-auto">
              3-9 Hyde Road Manchester, Postcode M12 6BQ United Kingdom{" "}
            </p>
          </div>
          <div className="mx-auto md:mx-0">
            <div className="flex gap-6 items-center ">
              <FontAwesomeIcon className="icons" icon={faClock} />
              <p className="text-xl md:text-2xl">09:00am – 6:00pm</p>
            </div>
          </div>
          <div className="flex gap-6 items-center mx-auto md:mx-0">
            <FontAwesomeIcon className="icons" icon={faEnvelope} />
            <p className="text-xl md:text-2xl">info@gmail.com</p>
          </div>
          <div className="flex flex-row mt-6 gap-4 mx-auto md:mx-0">
            <Link to="https:/facebook.com">
              <FontAwesomeIcon icon={faFacebook} className="icons" />
            </Link>
            <Link to="https:/twitter.com">
              <FontAwesomeIcon icon={faXTwitter} className="icons" />
            </Link>
            <Link to="https:/instagram.com">
              <FontAwesomeIcon icon={faInstagram} className="icons" />
            </Link>
            <Link to="https:/youtube.com">
              <FontAwesomeIcon icon={faYoutube} className="icons" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
