import React from "react";
import pdfFile from "../../assets/docs/ARDesignResume.pdf";

export default function Resume() {
  return (
    <section>
    <div>
      <header className="resume" id="resume">
        <h1 className="flex-row">Resume</h1>
      </header>
      <a href={pdfFile} download="ARDesignResume.pdf">
          <button type="button">Download my Resume</button>
        </a>
      <div className="mx-2 flex-row resume-container">
        <div className="flex-column resume-card">
          <h3>Front-End</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript/JQuery</li>
            <li>Bootstrap/Normalize/Bulma</li>
            <li>React</li>
            <li>Agile Web Dev/Git</li>
            <li>UX/UI forward</li>
            <li>Mobile Responsive</li>
            <li>API Integration</li>
          </ul>
        </div>
        <div className="flex-column resume-card">
          <h3>Back-End</h3>
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
        <div className="flex-column resume-card">
          <h3>Database</h3>
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
        <div className="flex-column resume-card">
        <h3>Production</h3>
        <ul>
          <li>Heroku</li>
          <li>Atlas</li>
          <li>Git</li>
          <li>Docker</li>
          <li>Insomnia</li>
          <li>Playground</li>
        </ul>
      </div>
    </div>
    </div>
    </section>
  );
}
