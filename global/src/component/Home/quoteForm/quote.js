import React, {useState} from "react";
import "./quote.css";

function Quote2() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [enquiry, setEnquiry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      phone,
      location,
      enquiry
    };
    
    console.log(templateParams);
  };

    
  return (
    <div className="quoteForm2">
      <div className="quoteFormWrapper">
        <form action="" onSubmit={handleSubmit} className="quoteformchild">
          <h2>Get a Quote</h2>
          <div>
            <label>Name:</label> <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email Address:</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <br />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label>Location:</label>
            <br />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="quoteEnquiry">
            <label>Enquiry:</label>
            <br />
            <textarea
              value={enquiry}
              onChange={(e) => setEnquiry(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Quote2;
