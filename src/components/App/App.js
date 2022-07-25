import "./App.css";
import { useState } from "react";
import Question from "../Question/Question";

function App() {
  const [score, setScore] = useState(0);

  const [questionObj, setQuestionObj] = useState({});

  const [showQuestion, setShowQuestion] = useState(false);

  const [message, setMessage] = useState(false);

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
          category: data[0].category.title.toUpperCase(),
          points: data[0].value,
          showQuestion: false,
        };

        setQuestionObj(obj);

      }
      
    } catch (e) {
      console.log(e);
      setMessage('Jeopardy API utilized is now defunct.')
    }
  };

  return (
    <div className="App">
      <h1>Welcome to Jeopardy !</h1>
      <div id='main-info'>
      <button onClick={handleClick}>Get Random Trivia Question</button>
      {message ? null : <p> {message}</p>}
      <h2>Score:</h2> <p>{score}</p>
      <div id='score-buttons'>
      <button onClick={handleScore} name="inc">
        Got it!
      </button>
      <button onClick={handleScore} name="dec">
        Didn't get it!
      </button>
      </div>
      <Question questionObj={questionObj} handleToggle={handleToggle} />
      </div>
    </div>
  );
}

export default App;
