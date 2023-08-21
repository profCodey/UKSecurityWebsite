import React from "react";
import "./services.css";
import Quote2 from "../quoteForm/quote";

function Services() {
  return (
    <div className="services">
      <div className="homeUSP">
        <h2>
          Let's Secure Your Venue{" "}
          <span style={{ color: "#ff9d2f" }}>Together</span>
        </h2>
        <p className="para2" >
          At Global Total Security Limited, excellence is not just a buzzword;
          it's our driving force. We constantly innovate and refine our
          techniques, utilizing state-of-the-art technology to stay ahead in the
          industry. When you choose us, you choose a partner committed to ensuring
          your venue's security while elevating its reputation.
        </p>
        <p>
          <br />
          Whether you are running a nightclub, bar, restaurant, or hosting a
          special event, our door supervisor services are designed to ensure the
          safety and enjoyment of all attendees. Trust Global Total Security
          Limited for reliable, proactive, and customer-focused security
          solutions. Contact us today to discuss your security needs, receive a
          personalized quote, or simply to learn more about how we can help.
        </p>
        <div className="homeList">
          <div className="homeListChild">
            <ul>
              <li>
                Access Control Management
                <span className="def"></span>
              </li>
              <li>Crowd Management</li>
              <li>ID Verification</li>
              <li>Conflict Resolution</li>
              <li>Safety Patrols</li>
            </ul>
          </div>
          <div className="homeListChild">
            <ul>
              <li>Event Security</li>
              <li>Emergency Evacuation</li>
              <li>Vigilant Surveillance</li>
              <li>Customer Assistance</li>
              <li>Front of Stage</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="quote">
        <Quote2 />
      </div>
    </div>
  );
}

export default Services;
