import React, {useState} from "react";
import "./faq.css";

function FaqProp({ question, answer }) {
const [showFaq, setShowFaq] = useState(false);

    const handleToggleFAQ = () => {
        setShowFaq(!showFaq);
    };
  return (
    <div className="faqProp">
      <div className="faqPropHead" onClick={handleToggleFAQ}>
        <h2>{question}</h2>
        <div className="faqPlus" onClick={handleToggleFAQ}>
          +
        </div>
      </div>
      {showFaq && (
        <div className="faqPropChild">
          {/* <div className="faqText"> */}
          {/* <h2>{question}</h2> */}
          <p>{answer}</p>
          {/* </div> */}

          {/* <div className="faqText2">
            <div className="faqPlus" onClick={handleToggleFAQ}>
              -
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default FaqProp;
