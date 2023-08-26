import React from 'react'
import GetQuote from '../component/Quote/GetQuote'
import doorland from "../assets/images/careers.jpg";
import PageHeader from '../component/pageHeader';


function Quote() {
  return (
    <div>
      <div>
        <PageHeader
          imgPotrait={doorland}
          imgLandscape={doorland}
          title="GET QUOTE"
        />
      </div>
      <GetQuote />
    </div>
  );
}

export default Quote