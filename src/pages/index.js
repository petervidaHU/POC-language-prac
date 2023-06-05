import * as React from "react"
import { smalltalkQuestion } from './../prompts';

import Layout from "../components/layout"
import Seo from "../components/seo"
import Form from "../components/form"

const IndexPage = () => (
  <Layout>
    <h1>POC - project interview practicing with ChatGPT</h1>
    <div>
      This is a POC for a practicing application for the english course of Project Interview.
      use the forms below, to give some answer for the different parts of the interview:
    </div>
    <div>
      <h3>small talk</h3>
      <p>description of a good small talk answer...</p>
      <p>QUESTION: {smalltalkQuestion[0]}</p>
      <Form topic="smallTalk" index="0"></Form>
      <p>description of a good small talk answer...</p>
      <p>QUESTION: {smalltalkQuestion[1]}</p>
      <Form topic="smallTalk" index="1"></Form>
    </div>
    <div>
      <h3>tell me about yourself</h3>
      <p>description of a ...</p>
      <p>QUESTION:</p>
      <Form topic="yourself"></Form>
    </div>
    <h2>coming soon...</h2>
    <div>
      <h3>communication issues</h3>
      <p>description of a ...</p>
      <p>QUESTION: ?</p>
      
    </div>
    <div>
      <h3>answering questions</h3>
      <p>description of a ...</p>
      <p>QUESTION: ?</p>
      
      <h3>with PREP structure</h3>
      <h3>answering with STAR</h3>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
