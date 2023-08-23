import React from "react";
import PageHeader from "../pageHeader";
import doorland from "../../assets/images/careers.jpg";

function CareerHeader() {
  return (
    <div>
      <div>
        <PageHeader
          imgPotrait={doorland}
          imgLandscape={doorland}
          title="Careers"
        />
      </div>
    </div>
  );
}

export default CareerHeader;
