import React, { useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const AccItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();

  return (
    <div className="faq-wrapper" >
    <button className={`faq-question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
     <p className='faq-question-content'>{question}</p>
     <RiArrowDropDownLine className={`faq-arrow ${isOpen ? 'active' : ''}`} /> 
    </button>

     <div ref={contentHeight} className="faq-answer-container" style={
          isOpen
          ? { height: contentHeight.current.scrollHeight }
          : { height: "0px" }
         }>
      <p className="faq-answer-content">{answer}</p>
     </div>
   </div>
  );
};
export default AccItem;
