import React, {useState} from 'react'
import './faq.css'
import FaqProp from '../../faq/faq'


function Faq() {


   let question1 = "Are your door supervisors licensed?";
   let answer1 =
     "Yes, our door supervisors are rigorously licensed and certified by the SIA (Security Industry Authority) as mandated by law. With comprehensive training, thorough vetting, and proficiency in first aid and customer service, they bring exceptional value to your venue or event.";
  
     let question2 = "What types of venues do you provide services for?";
     let answer2 =
       "We offer door supervisory services for a wide range of venues, including nightclubs, bars, restaurants, hotels, music festivals, corporate events, hotels and private functions.";
  
      let question3 =
        "Can your services be tailored to my specific venue or event?";
      let answer3 =
        "Certainly, we offer personalized security solutions based on your venue's layout, size, and requirements to ensure effective protection.";
  
  let question4 = "Why do I need door supervisor services for my venue?";
  let answer4 =
    "We understand that every venue is unique. Our team conducts a thorough assessment of your venue's layout, size, and specific needs. We then design a personalized security plan to address your requirements and concerns.";
  
    let question5 = "Can your door supervisors handle medical emergencies?";
    let answer5 =
      "Absolutely, many of our door supervisors are trained in first aid and can provide initial medical assistance while waiting for professional help if needed.";
  
    let question6 = "How do your door supervisors manage unruly behavior?";
    let answer6 =
       "Our door supervisors are skilled in de-escalation techniques, ensuring a calm resolution to conflicts while maintaining a safe environment.";
  
  return (
    <div className="faqParent">
      <h1>Frequently Asked Questions</h1>
      <div className="faq">
        <FaqProp question={question1} answer={answer1} />
        <FaqProp question={question2} answer={answer2} />
        <FaqProp question={question3} answer={answer3} />
        <FaqProp question={question4} answer={answer4} />
        <FaqProp question={question5} answer={answer5} />
        <FaqProp question={question6} answer={answer6} />
      </div>
    </div>
  );
}

export default Faq