import React from "react";
import "../Home/OurServices/services.css";
import Quote2 from "../Home/quoteForm/quote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function GetQuote() {
  return (
    <div className="">
      <div className="services" style={{marginBottom: '30px'}}>
        <div className="homeUSP">
          <h2>
            Let's Secure Your Venue{" "}
            <span style={{ color: "#ff9d2f" }}>Together</span>
          </h2>
          <p className="para2">
            At Global Total Security Limited, excellence is not just a buzzword;
            it's our driving force. We constantly innovate and refine our
            techniques, utilizing state-of-the-art technology to stay ahead in
            the industry. When you choose us, you choose a partner committed to
            ensuring your venue's security while elevating its reputation.
          </p>
          <p>
            <br />
            Whether you are running a nightclub, bar, restaurant, or hosting a
            special event, our door supervisor services are designed to ensure
            the safety and enjoyment of all attendees. Trust Global Total
            Security Limited for reliable, proactive, and customer-focused
            security solutions. Contact us today to discuss your security needs,
            receive a personalized quote, or simply to learn more about how we
            can help.
          </p>
          <div className="w-full">
            <div className="md:grid grid-cols-3 lg:grid-cols-2  pt-8 gap-x-8 md:gap-x-1 lg:gap-x-2 w-full">
              <div className="flex gap-4 items-center">
                <div>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>
                  <p className="">Crowd Management</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>
                  <p>Access Control Management</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>
                  {" "}
                  <p>ID Verification</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>
                  <p>Conflict Resolution</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>
                  <p>Retail Security Services</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>
                  <p>Safety Patrols</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>
                  <p>Event Security</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>
                  <p>Emergency Evacuation</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>
                  <p>Vigilant Surveillance</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>
                  <p>Customer Assistance</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>
                  <p>Front of Stage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="quote">
          <Quote2 />
        </div>
      </div>
    </div>
  );
}

export default GetQuote;
