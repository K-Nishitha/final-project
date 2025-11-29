import React from "react";
import "./Html.css";

const Html = () => {
return ( <div className="html-container"> <h1>
Learn HTML{" "} <img
       src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
       alt="HTML Logo"
     /> </h1>

```
  <div className="intro">
    <p>
      HTML (HyperText Markup Language) is the standard language for creating
      web pages.
    </p>
    <p>
      It is used to structure content on the web and is the foundation of
      modern websites.
    </p>
    <p>Learning HTML is the first step towards becoming a web developer.</p>
  </div>

  <div className="sections">
    <div className="section">
      <h2>Source Videos</h2>
      <a
        href="https://youtu.be/HcOc7P5BMi4?si=O0ivcfOYexcGNNiR"
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        Video 1
      </a>
      <a
        href="https://youtu.be/HD13eq_Pmp8?si=Vv4wi66CTelgagG0"
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        Video 2
      </a>
    </div>

    <div className="section">
      <h2>Source Notes</h2>
      <a
        href="https://www.tutorialspoint.com/html/html_tutorial.pdf"
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        Notes 1
      </a>
      <a
        href="https://www.lkouniv.ac.in/site/writereaddata/siteContent/202005171817289765Priyanka-WT-HTML%20Basics.pdfL"
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        Notes 2
      </a>
    </div>

    <div className="section">
      <h2>Source Websites</h2>
      <a
        href="https://www.geeksforgeeks.org/html-tutorial/"
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        Website 1
      </a>
      <a
        href="https://html.com/"
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        Website 2
      </a>
    </div>
  </div>
</div>


);
};

export default Html;
