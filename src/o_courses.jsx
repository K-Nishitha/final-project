//o_courses.jsx-->
import { useNavigate } from "react-router-dom";
import { courses } from "./courses.js";
import "./o_courses.css";

export default function CSELibrary() {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    const course = document.getElementById("topics").value;
    if (course) {
      navigate(`/${course}`);
    }
  };

  return (
    <div className="container">
      <h1>CSE Library</h1>

      <div className="box">
        <label htmlFor="topics">Select the course needed:</label>
        <select id="topics">
          <option value="">-- Select Course --</option>
          {Object.entries(courses).map(([path, course]) => (
            <option key={path} value={path}>
              {course.name}
            </option>
          ))}
        </select>

        <button onClick={handleStartLearning}>Start Learning</button>
      </div>
    </div>
  );
}
