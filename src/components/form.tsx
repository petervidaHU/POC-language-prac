import React, { useState } from "react";
import { smallTalkPromt, smalltalkQuestion, yourselfPromt, yourselfQuestion } from '../prompts';
import { topicConnector, topicName } from "../types/openaiTypes";

interface FormProps {
  topic: topicName,
  index: number,
};

const Form: React.FC<FormProps> = ({ topic, index }) => {
  const topicsOfLife: topicConnector = {
    smallTalk: {
      prompt: smallTalkPromt,
      question: smalltalkQuestion,
    },
    yourself: {
      prompt: yourselfPromt,
      question: yourselfQuestion,
    },
  };
  const [message, setMessage] = useState('');
  const [resp, setResp] = useState('')
  const [load, setLoad] = useState(false)

  const handleSubmit = async (e: any) => {
    setLoad(true);
    e.preventDefault();
    const userAnswer = e.target.smallTalk.value;
    const AWS_URL = 'https://6r5j5xaxh8.execute-api.eu-central-1.amazonaws.com/first/oai'
    const response = await fetch(AWS_URL, {
      method: 'POST',
      body: JSON.stringify({
        questionPrompt: topicsOfLife[topic].prompt,
        question: topicsOfLife[topic].question[index],
        userAnswer: userAnswer,
      })
    });
    const { data } = await response.json();
    // console.log('data:', data);
    setResp(data);
    setLoad(false);
  };

  const handleChange = (e: any) => {
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
