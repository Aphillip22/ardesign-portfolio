import React from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import ResumePDF from '../../assets/docs/ARDesignResume.pdf'

export default function Resume() {
  return (
<section>
  <div className='flex-row'>
    <h2>
      CV
    </h2>
  </div>
  <div className="mx-2">
    <div className="flex-column">
      <h5>Front-End Technologies</h5>
      <ul>
        <li>HTML/CSS</li>
        <li>JavaScript/JQuery</li>
        <li>JSON</li>
        <li>Bootstrap/Normalize/Bulma</li>
        <li>React</li>
        <li>Agile Web Dev/Git</li>
        <li>UX/UI forward</li>
        <li>Mobile Responsive</li>
        <li>API Integration</li>
      </ul>
    </div>
    <div className="flex-column">
      <h5>Back-End Technologies</h5>
      <ul>
        <li>API Creation</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MVC</li>
        <li>RESTful</li>
        <li>PWA</li>
        <li>Service Workers</li>
      </ul>
    </div>
    <div className="flex-column">
      <h5>Database Technologies</h5>
      <ul>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>NoSQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>GraphQL</li>
        <li>PostgreSQL</li>
      </ul>
    </div>
  </div>
    <div className="flex-column">
      <h5>Production Technologies</h5>
      <ul>
        <li>Heroku</li>
        <li>Atlas</li>
        <li>Git</li>
      </ul>
    </div>
  <div className="mx-2 flex-row">
    <Document className={'PDF'} file={ResumePDF}>
      <Page pageNumber={1} />
    </Document>
  </div>
  <div className="mx-2 flex-row">
    <a href={ResumePDF} download='ARDesignResume.pdf'>
      <button type="button">Download Resume</button>
    </a> 
  </div>
</section>
);
}