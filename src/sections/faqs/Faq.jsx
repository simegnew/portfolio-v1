import { useState } from 'react';
import QuestionsComponent from '../../components/QuestionsComponent';
import data from './data';
import './faq.css'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


const Faq = () => {
 
    const [activeQuestions, setActiveQuestions] = useState([]);
    const [activeQuestionId, setActiveQuestionId] = useState(null);
    
    const handleClick = (questionId) => {
      if (activeQuestions.includes(questionId)) {
        setActiveQuestions(activeQuestions.filter((id) => id !== questionId));
      } else {
        setActiveQuestions([...activeQuestions, questionId]);
      }
         setActiveQuestionId(
           questionId === activeQuestionId ? null : questionId
         );
    };

  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questins i usually get. click to toggle the answer and if
        you still have some more questions. shoot me a message from the contact
        section.
      </p>
      <div className="container faq__items">
        {data.map((item) => (
          <QuestionsComponent key={item.id}>
            <div className="faq__content">
              <span className="faq__question">{item.ques}</span>
              <span onClick={() => handleClick(item.id)} className="faq__icon">
                {item.id === activeQuestions ? (
                  <AiOutlineMinus />
                ) : (
                  <AiOutlinePlus />
                )}
              </span>
            </div>
            <div className="faq__answer">
              {activeQuestions.includes(item.id) && (
                <span key={item.id}>{item.answer}</span>
              )}
            </div>
          </QuestionsComponent>
        ))}
      </div>
    </section>
  );
}

export default Faq