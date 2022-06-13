import React from "react";

const Question = ({ questionObj, handleToggle }) => {
  return (
    <div className="question">
      <h2>Category:</h2>
      <p>{questionObj.category}</p>
      <h2>Points:</h2>
      <p>{questionObj.points}</p>
      <h2>Answer:</h2>
      <p>{questionObj.question}</p>
      <div>
      {questionObj.showQuestion && (
      <h3>Question: What / Who is {questionObj.answer} ?</h3>
      )}</div>
      <button id='reveal-btn' onClick={handleToggle}> Reveal Question</button>
    </div>
  );
};

export default Question;
