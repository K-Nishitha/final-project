// src/courses.js

import CProgramming from "./c.jsx";
import CPPProgramming from "./cpp.jsx";
import HTMLCourse from "./html.jsx";
import CSSCourse from "./css.jsx";
import JSProgramming from "./js.jsx";
import JavaProgramming from "./java.jsx";

export const courses = {
  c: { name: "C Programming", component: CProgramming },
  cpp: { name: "C++", component: CPPProgramming },
  html: { name: "HTML", component: HTMLCourse },
  css: { name: "CSS", component: CSSCourse },
  js: { name: "JavaScript", component: JSProgramming },
  java: { name: "Java", component: JavaProgramming },
};
