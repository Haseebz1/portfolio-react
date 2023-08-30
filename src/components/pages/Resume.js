import React from 'react';
import './resume.css';
export default function Resume() {
  return (
    <div className='myresume'>
      <h1>Resume</h1>
      <h2>Front-end Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h2>Back-end Skills:</h2>
      <ul>
        <li>API Development</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>REST API</li>
        <li>GraphQL</li>
      </ul>
      
      <h5>Please click on the CV icon below to access my CV document</h5>
    </div>
  );
}
