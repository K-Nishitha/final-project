import React from "react";
import "./js.css";

const Js = () => {
return ( <div className="java-container"> <h1>
JavaScript Learning{" "} <img
       src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
       alt="JavaScript Logo"
     /> </h1>

```
  <div className="intro">
    <p>
      JavaScript is a versatile programming language used for web
      development, interactive applications, and more.
    </p>
    <p>
      It is widely used in front-end and back-end development with
      frameworks like React, Node.js, and Angular.
    </p>
    <p>
      Learning JavaScript opens up opportunities in web development, game
      programming, and automation.
    </p>
  </div>

  <div className="sections">
    <div className="section">
      <h2>Source Videos</h2>
      <a
        href="https://www.youtube.com/watch?v=W6NZfCO5SIk"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        Video 1
      </a>
      <a
        href="https://www.youtube.com/watch?v=PkZNo7MFNFg"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        Video 2
      </a>
    </div>

    <div className="section">
      <h2>Source Notes</h2>
      <a
        href="https://basponccollege.org/LMS/EMaterial/Science/Comp/HVP/JS%20Notes.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        Notes 1
      </a>
      <a
        href="https://www.tutorialspoint.com/javascript/javascript_tutorial.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        Notes 2
      </a>
    </div>

    <div className="section">
      <h2>Source Websites</h2>
      <a
        href="https://www.w3schools.com/js/"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        Website 1
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        Website 2
      </a>
    </div>
  </div>
</div>


);
};

export default Js;
