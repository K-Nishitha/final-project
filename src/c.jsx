import React from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./c.css";

export default function CProgramming() {
  return (
    <div className="container">
      <h1>
        C Programming{" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
          alt="C Logo"
        />
      </h1>

      <div className="intro">
        <p>
          C is a general-purpose, procedural programming language widely used
          for system programming and application development.
        </p>
        <p>
          It provides low-level access to memory and is known for its efficiency
          and performance.
        </p>
        <p>
          With its structured approach and rich set of libraries, C remains a
          fundamental language for programmers.
        </p>
      </div>

      <div className="sections">
        <div className="section">
          <h2>Source Videos</h2>
          <a
            href="https://youtu.be/87SH2Cn0s9A?si=BQa6d3qJpnv2gVs9"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Video 1
          </a>
          <a
            href="https://www.youtube.com/watch?v=irqbmMNs2Bo"
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
            href="https://drive.google.com/drive/folders/1SEfL7Yw3nJfVLToz9MAuAm2_NoCCk1qD"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Notes 1
          </a>
          <a
            href="https://www.vssut.ac.in/lecture_notes/lecture1424354156.pdf"
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
            href="https://www.w3schools.com/c/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Website 1
          </a>
          <a
            href="https://www.geeksforgeeks.org/c-programming-language/"
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
}
