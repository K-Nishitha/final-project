import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import App from "./App.jsx";
import CSELibrary from "./o_courses.jsx";
import { courses } from "./courses.js";
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import SkillEvaluation from "./skill_evaluation.jsx";
import CareerRecommendations from "./career_recommendations.jsx";

// Protected Route Component
function ProtectedRoute({ element, isLoggedIn }) {
  return isLoggedIn ? element : <Navigate to="/login" />;
}

export default function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("careerpath_loggedin") !== null;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("careerpath_loggedin") !== null);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={isLoggedIn ? <App /> : <Navigate to="/login" />} />
      <Route
        path="/courses"
        element={
          <ProtectedRoute element={<CSELibrary />} isLoggedIn={isLoggedIn} />
        }
      />
      <Route
        path="/skill-eval"
        element={
          <ProtectedRoute
            element={<SkillEvaluation />}
            isLoggedIn={isLoggedIn}
          />
        }
      />
      <Route
        path="/career-reco"
        element={
          <ProtectedRoute
            element={<CareerRecommendations />}
            isLoggedIn={isLoggedIn}
          />
        }
      />

      {/* dynamic course pages */}
      {Object.entries(courses).map(([path, course]) => {
        const CourseComponent = course.component;
        return (
          <Route
            key={path}
            path={`/${path}`}
            element={
              <ProtectedRoute
                element={<CourseComponent />}
                isLoggedIn={isLoggedIn}
              />
            }
          />
        );
      })}
    </Routes>
  );
}
