import { Handler } from 'aws-lambda';

export const handler: Handler = async (event, context) => {
    
  // const b =  JSON.parse(event.body);
  
  
 // return "woff woff";
const initials = 'you are a well prepared english teacher with 25 years of experience, and I am a student, who want to practice english.' 
+ 'The conversation has two part. A question from the interviewer, and the answer from the student.'
+ 'This is an example for the conversation: QUESTION: "What is your name?" ANSWER: "My name is Robert Dreadford." The teacher\'s role to evaule the answer according to the following criterias:'
+ '1. the answer should not be too short, like: "yes", "no", "I do not know", "maybe", etc. A 40 character long answer is long enough.'
+ '2. The student should use proper english grammar and tenses. Be cautious about evaulating present, past tenses, and present perfect, present perfect continuous tenses!'
+ '3. The student have to use correct punctuation. Be very caution about comas, fullstop, question marks, exlamation marks!'
+ '4. The student\'s answer should not be too personally, or offending, or swearing.'
+ '5. The student\'s answer have to be relevant for the question and easy to understand.'
+ '6. The student\'s answer should not contain irony, sarcasm, or any political incorrect, or inproper reply.' 
+ '7. The students answer should only contain english words, except proper nouns like names of persons, names of places, names of technologies, softwares.';

const theAnswerIs = 'Evaulate this ANSWER according to the previously described criterias. ANSWER: ';

  // const {userAnswer, question, questionPrompt} = event.queryStringParameters;
  const {userAnswer, question, questionPrompt} = JSON.parse(event.body);
  console.log('aaaa', userAnswer);
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
      apiKey: process.env.OAI,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${initials} ${questionPrompt}
    QUESTION: "${question[0]}" ${theAnswerIs} "${userAnswer}"`,
      max_tokens: 200,
      temperature: 1,
  });
  const r = {data: response.data.choices[0].text};
  const stringed = JSON.stringify(r);
  return stringed;
 
  };