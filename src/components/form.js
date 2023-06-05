import React, { useState } from "react";
import { smallTalkPromt, smalltalkQuestion, yourselfPromt, yourselfQuestion } from './../prompts';


const Form = ({ topic, index }) => {
  const topicsOfLife = {
    smallTalk: {
      p: smallTalkPromt,
      q: smalltalkQuestion,
    },
    yourself: {
      p: yourselfPromt,
      q: yourselfQuestion,
    },
  };
  const [message, setMessage] = useState('');
  const [resp, setResp] = useState('')
  const [load, setLoad] = useState(false)

  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    const userAnswer = e.target.smallTalk.value;
    const AWS_URL = 'https://6r5j5xaxh8.execute-api.eu-central-1.amazonaws.com/first/oai'
    const response = await fetch(AWS_URL, {
      method: 'POST',
      // headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        questionPrompt: topicsOfLife[topic].p,
        question: topicsOfLife[topic].q[index],
        userAnswer: userAnswer,
      })
    });
    const { data } = await response.json();
    // console.log('data:', data);
    setResp(data);
    setLoad(false);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          style={{ width: '100%', height: '150px' }}
          name="smallTalk"
          value={message}
          onChange={handleChange}
          placeholder="Enter your answer..."
        />
        <button type="submit">Submit</button>
      </form>
      <p>
        the response: {load ? 'loading...' : resp}
      </p>
    </div>
  );
};

export default Form;
