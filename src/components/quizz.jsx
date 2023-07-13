import React, { useState } from 'react';

const Quizz = ({ questions, answers }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const  [result, setResult] = useState([]);

  const handleAnswerChange = (index, event) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = event.target.value;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    console.log('selected answers: ', selectedAnswers);
    const temp = answers.map((a, index) => index === +selectedAnswers[index])
    console.log('result temp: ', temp);
    setResult(temp)
  };

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <span>{question}</span>
          <select value={selectedAnswers[index] || ''} onChange={(event) => handleAnswerChange(index, event)}>
            <option value="">Select an answer</option>
            {answers.map((answer, answerIndex) => (
              <option key={answerIndex} value={answerIndex}>{answer}</option>
            ))}
          </select>
          {result[index] ? (<span>OK</span>) : (<span>INCORRECT</span>)}
          <br/>
          <br/>
          <br/>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {result.every(r => r) && "--wünderful--"}
    </div>
  );
};

export default Quizz;
