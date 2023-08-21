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
    <div className="flex flex-col md:flex-row lg:flex-row sm:items-center lg:justify-center h-auto w-full bg-[#001f41] px-16 m-auto gap-16 md:gap-1 lg:gap-32 py-16">
      <div className="w-full md:w-1/3 text-white w-1/4">
        <h2 className="text-2xl">Global Total Security Limited</h2>
        <hr className="w-1/4 mb-8" />
        <p className="text-xl text-justify">
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
      <div className="text-white flex flex-col w-full md:w-1/3  md:items-center gap-6">
        <h2 className="text-2xl">Usefull Links</h2>
        <ul className="list-none flex flex-col gap-4">
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
          <li>
            <Link className="nav-link text-xl" to="/careers">
              Careers
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-white text-xl flex flex-col gap-4 w-full md:w-1/3">
        <h2 className="text-2xl">Get in Touch</h2>

        <div className="flex">
          <FontAwesomeIcon className="icons" icon={faPhone} />
          <p>
            01 616 690 880, +44 7862038656, +44 7404 749549, +44 7878 251590
          </p>
        </div>

        <div className="flex">
          <FontAwesomeIcon className="icons" icon={faLocationDot} />
          <p>3-9 Hyde Road Manchester, Postcode M12 6BQ United Kingdom </p>
        </div>

        <div>
          <div className="flex">
            <FontAwesomeIcon className="icons" icon={faClock} />
            <p>09:00am – 6:00pm</p>
          </div>
        </div>

        <div className="flex">
          <FontAwesomeIcon className="icons" icon={faEnvelope} />
          <p>info@gmail.com</p>
        </div>

        <div className="flex flex-row mt-6">
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
  );
}

export default Footer;
