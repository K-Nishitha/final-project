import React from "react";
import "./css.css";

const Css = () => {
return ( <div className="css-container"> <h1>
CSS Learning{" "} <img
       src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
       alt="CSS Logo"
     /> </h1>

```
  <div className="intro">
    <p>
      CSS (Cascading Style Sheets) is used to design and style web pages,
      making them visually appealing and responsive.
    </p>
    <p>
      It is an essential skill for web developers, enabling them to control
      layout, colors, fonts, and animations.
    </p>
    <p>
      Learning CSS is crucial for front-end development and designing
      modern, responsive websites.
    </p>
  </div>

  <div className="sections">
    <div className="section">
      <h2>Source Videos</h2>
      <a
        href="https://youtu.be/wRNinF7YQqQ?si=YGVGMiSC2ClRDTYo"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        Video 1
      </a>
      <a
        href="https://www.youtube.com/watch?v=OXGznpKZ_sA"
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
        href="https://web.stanford.edu/class/cs142/lectures/CSS.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        Notes 1
      </a>
      <a
        href="https://www.tutorialspoint.com/css/css_tutorial.pdf"
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
        href="https://www.w3schools.com/css/"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        Website 1
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
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

export default Css;
