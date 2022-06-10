import React from "react";

const Question = ({ questionObj, handleToggle }) => {
  return (
    <div className="question">
      <h3>Answer: {questionObj.question}</h3>
      <h3>Category: {questionObj.category}</h3>
      <h3>Points: {questionObj.points}</h3>
      {questionObj.showQuestion && (
        <h3>Question: Who / What is {questionObj.answer} ?</h3>
      )}
      <button onClick={handleToggle}>Click to Reveal Question</button>
    </div>
  );
};

export default Question;
