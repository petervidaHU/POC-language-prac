//require('dotenv').config();
import React, { useState, useEffect } from 'react'
import Quizz from '../components/quizz';

const MindTheGap = () => {
  const [task, setTask] = useState('');
  const [res, setRes] = useState('');
  const [l, setL] = useState(false);

  useEffect(() => {
    console.log('incoming res: ',);
    const input = res.data?.trim();
    let temp;
    if (input) {
      temp = input
        .split('QUESTION:')
        .map(fullTask => fullTask
          .split('ANSWER:')
          .map(separatedTaskPart => separatedTaskPart
            .trim()
            .replace(/\n/g, "")))
        .filter(arr => arr.length === 2)
        .reduce((acc, task) => {
          acc.questions.push(task[0]);
          acc.answers.push(task[1]);
          return acc;
        }, {
          questions: [], answers: [],
        });
    }
    console.log('separated res: ', temp);
    setTask(temp);
  }, [res])


  const prompt = `You are an English teacher, I am a student. I want to reach the C1 level of English, and I need to practice. Create a fill-the-blank space exercise for English learners to practice level C1 English sentences. Like this: QUESTION: Taking on new challenges can ___ your motivation., ANSWER: boost.
  Create 10 sentences about a generic topic with C1 level of English. This is a mind-the-gap exercise. Start every sentence with this string: "QUESTION:"`;

  const callOpenAI = async () => {
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: process.env.OAI,
    });

    const openai = new OpenAIApi(configuration);
    let response;
    setL(true)
    try {
      response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 1000,
        temperature: 1,
      });
    } catch (err) {
      console.log('error in api call:', err.message || err)
    }
    const r = { data: response.data.choices[0].text };
    // const stringed = JSON.stringify(r);
    console.log('response::::', r);
    setRes(r);
    setL(false)
  };

  return (
    <div>
      {l && (<div>loading</div>)}
      <button onClick={callOpenAI}>Invoke OpenAI API</button>
      <div>
        {task?.answers && (
          <Quizz questions={task.questions} answers={task.answers} />
        )}
      </div>
    </div>
  );
};

export default MindTheGap