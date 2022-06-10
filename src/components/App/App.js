import "./App.css";
import { useState } from "react";
import Question from "../Question/Question";

function App() {
  const [score, setScore] = useState(0);

  const [questionObj, setQuestionObj] = useState({});

  const [showQuestion, setShowQuestion] = useState(false);

  const handleScore = (e) => {
    const tempScore =
      score +
      (e.target.name === "inc" ? questionObj.points : questionObj.points * -1);
    setScore(tempScore);
  };

  const handleToggle = () => {
    setShowQuestion(!showQuestion);
    setQuestionObj({ ...questionObj, showQuestion: !showQuestion });
  };

  const handleClick = async () => {
    const URL = "http://jservice.io/api/random";
    try {
      const result = await fetch(URL);
      const data = await result.json();

      console.log(data[0]);

      if (
        !data[0].value ||
        !data[0].answer ||
        !data[0].question ||
        !data[0].category.title

      ) {

        handleClick();

      } else {
        const obj = {
          question: data[0].question,
          answer: data[0].answer,
          category: data[0].category.title,
          points: data[0].value,
          showQuestion: false,
        };

        setQuestionObj(obj);

      }
      
    } catch (e) {}
  };

  return (
    <div className="App">
      <h1>Welcome to Jeopardy !</h1>
      <button onClick={handleClick}>Random Trivia Question</button>
      <h2>Score: {score}</h2>
      <button onClick={handleScore} name="inc">
        I got it !
      </button>
      <button onClick={handleScore} name="dec">
        I didn't get it !
      </button>
      <Question questionObj={questionObj} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
