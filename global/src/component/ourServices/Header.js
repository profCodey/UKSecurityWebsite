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
          Services We Offer: Ensuring Safety, Enhancing Experiences{" "}
          <span className="text-[#ff0000]">10 Years</span> Of Experience
        </h2>
        <p className="text-center w-4/5 mx-auto text-2xl mt-8 lg:w-1/2 lg:text-2xl lg:leading-relaxed">
          Global Total Security was established in February, 2013 and our
          Directors and Management team have more than 30 Years combined
          experience within the Security Industry. We stand as a pillar of trust
          and excellence in the realm of door supervisory services. Based in
          Manchester, our legacy of over a decade exemplifies our commitment to
          safeguarding businesses, patrons, and the community at large.
        </p>
      </div>
    </div>
  );
}

export default Header