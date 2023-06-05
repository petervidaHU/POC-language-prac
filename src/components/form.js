import React, { useState } from "react";
import { initials, theAnswerIs, smallTalkPromt, smalltalkQuestion, yourselfPromt, yourselfQuestion } from './../prompts';
const { Configuration, OpenAIApi } = require("openai");

const Form = ({topic, index}) => {
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
    const configuration = new Configuration({
      
      // apiKey: `${process.env.OPENAI_API_KEY}`,
    });
    const openai = new OpenAIApi(configuration);

    console.log('teh prom:::',  `${initials} ${topicsOfLife[topic].p}
    QUESTION: "${topicsOfLife[topic].q[index]}" ${theAnswerIs} "${userAnswer}"`);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${initials} ${topicsOfLife[topic].p}
      QUESTION: "${topicsOfLife[topic].q}" ${theAnswerIs} "${userAnswer}"`,
      max_tokens: 200,
      temperature: 1,
    });
   
    setResp(response.data.choices[0].text);
    setLoad(false);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          style={{width: '100%', height: '150px'}}
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
