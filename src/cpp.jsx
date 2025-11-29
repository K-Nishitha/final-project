import React from "react";
import "./Cpp.css";

const Cpp = () => {
return ( <div className="cpp-container"> <h1>
C++ Programming{" "} <img
       src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
       alt="C++ Logo"
     /> </h1>

```
  <div className="intro">
    <p>
      C++ is a powerful, high-performance programming language that builds
      on the foundations of C.
    </p>
    <p>
      It supports object-oriented programming and provides extensive
      libraries for efficient development.
    </p>
    <p>
      With its flexibility and wide adoption, C++ is used in game
      development, software engineering, and system programming.
    </p>
  </div>

  <div className="sections">
    <div className="section">
      <h2>Source Videos</h2>
      <a
        href="https://youtu.be/-TkoO8Z07hI?si=JXy5b30Xl3F_LEUF"
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        Video 1
      </a>
      <a
        href="https://youtu.be/ZzaPdXTrSb8?si=UxbssTJHwenrDj0j"
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
        href="https://documents.uow.edu.au/~akheng/WORKSHOP/C++%20Course%20Notes.pdf/"
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        Notes 1
      </a>
      <a
        href="https://icsvvu.in/eresource/MSc_MCA_BCA-CPP-Lokesh%20Rathore.pdf"
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
        href="https://www.w3schools.com/cpp/"
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        Website 1
      </a>
      <a
        href="https://www.geeksforgeeks.org/c-plus-plus/"
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

export default Cpp;
