import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const loggedUser = JSON.parse(localStorage.getItem("careerpath_loggedin"));

  const handleOnlineCoursesClick = () => {
    navigate("/courses");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSkillEvalClick = () => {
    navigate("/skill-eval");
  };

  const handleCareerRecoClick = () => {
    navigate("/career-reco");
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("careerpath_loggedin");
    window.location.href = "/login";
  };

  return (
    <div className="App">
      <header>
        <h1>CareerPath Finder</h1>

        <nav style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          {loggedUser ? (
            <>
              <span className="profile-name">{loggedUser.email}</span>

              <button
                className="logout-btn"
                onClick={handleLogout}
                style={{
                  backgroundColor: "red",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <button className="login-btn" onClick={handleLoginClick}>
              Login
            </button>
          )}
        </nav>
      </header>

      <section className="hero">
        <h2>Discover Your Career Path!</h2>
        <p>
          Take tests, explore your strengths, and find the right career options
          for you.
        </p>
        <button className="get-started-btn">Get Started</button>
      </section>

      <section className="features">
        <div
          className="feature online-courses"
          onClick={handleOnlineCoursesClick}
        >
          <h3>Online Courses</h3>
        </div>

        <div
          className="feature"
          onClick={() => window.open("https://www.pskills.org/", "_blank")}
        >
          <h3>Personality Tests</h3>
        </div>

        {/* NEW: Skill Evaluation */}
        <div className="feature" onClick={handleSkillEvalClick} role="button">
          <h3>Skill Evaluation</h3>
          <p className="feature-sub">Take a short quiz to measure your skills</p>
        </div>

        {/* NEW: Career Recommendations */}
        <div className="feature" onClick={handleCareerRecoClick} role="button">
          <h3>Career Recommendations</h3>
          <p className="feature-sub">Get career suggestions based on your quiz score</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 CareerPath Finder | Built for students</p>
      </footer>
    </div>
  );
}

export default App;
