import React from "react";
import "./java.css";

const Java = () => {
return ( <div className="java-container"> <h1>
JAVA{" "} <img
       src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
       alt="Java Logo"
     /> </h1>

```
  <div className="intro">
    <p>
      Java is a high-level, class-based programming language known for its
      platform independence.
    </p>
    <p>
      It is widely used for building web applications, enterprise software,
      and mobile apps.
    </p>
    <p>
      With its "write once, run anywhere" capability, Java ensures code
      portability across platforms.
    </p>
    <p>
      Java's robust security, scalability, and performance make it a popular
      choice among developers.
    </p>
  </div>

  <div className="sections">
    <div className="section">
      <h2>Source Videos</h2>
      <a
        href="https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&si=WcwoLjOu2SBqZMSs"
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        Video 1
      </a>
      <a
        href="https://youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5&si=U2QPIHXGHy-0_IM6"
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
        href="https://docs.google.com/document/d/1d4cDG1bAVjvvKLjD9ZPQdJEGsQyGn_UIqCuluVmx5_0/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        Topic 1
      </a>
      <a
        href="https://docs.google.com/document/d/1upllrlSyv1pe86hBbNPUFT1nrmWsr6QPM4joL6Br1gU/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        Topic 2
      </a>
    </div>

    <div className="section">
      <h2>Source Websites</h2>
      <a
        href="https://www.codecademy.com"
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        Website 1
      </a>
      <a
        href="https://www.w3school.com"
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

export default Java;
