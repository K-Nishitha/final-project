import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./skill.css";

const QUESTIONS = [
  {
    q: "You are given a small coding problem. You...",
    options: [
      { text: "Solve it quickly using code", value: 2 },
      { text: "Think through the logic on paper first", value: 1 },
      { text: "Ask someone else to explain it", value: 0 },
    ],
  },
  {
    q: "When learning a new tool you...",
    options: [
      { text: "Read docs and practice immediately", value: 2 },
      { text: "Watch a tutorial then try it", value: 1 },
      { text: "Wait until someone teaches you", value: 0 },
    ],
  },
  {
    q: "Problem solving: you prefer to...",
    options: [
      { text: "Break the problem into smaller parts", value: 2 },
      { text: "Try random ideas until one works", value: 1 },
      { text: "Stop if it's too hard", value: 0 },
    ],
  },
  {
    q: "When working in a team you usually...",
    options: [
      { text: "Take initiative & guide the group", value: 2 },
      { text: "Do assigned tasks well", value: 1 },
      { text: "Prefer working alone", value: 0 },
    ],
  },
  {
    q: "You are comfortable learning technical topics from...",
    options: [
      { text: "Documentation & books", value: 2 },
      { text: "Videos/tutorials", value: 1 },
      { text: "Only classroom teaching", value: 0 },
    ],
  },
];

export default function SkillEvaluation() {
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (qIndex, val) => {
    const copy = [...answers];
    copy[qIndex] = val;
    setAnswers(copy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (answers.some((a) => a === null)) {
      alert("Please answer all questions.");
      return;
    }

    const total = answers.reduce((acc, v) => acc + v, 0);
    setScore(total);
    setSubmitted(true);

    // Save score for recommendations
    localStorage.setItem("careerpath_lastQuizScore", JSON.stringify(total));

    // Redirect after short delay
    setTimeout(() => navigate("/career-reco"), 900);
  };

  return (
    <div className="skill-page">
      <div className="skill-box">
        <h2>Skill Evaluation — Short Quiz</h2>

        <form onSubmit={handleSubmit}>
          {QUESTIONS.map((q, i) => (
            <div className="question" key={i}>
              <p className="q-text">
                {i + 1}. {q.q}
              </p>

              <div className="options">
                {q.options.map((opt, idx) => (
                  <label
                    key={idx}
                    className="option"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      margin: "6px 0",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="radio"
                      name={`q-${i}`}
                      checked={answers[i] === opt.value}
                      onChange={() => handleSelect(i, opt.value)}
                    />

                    <span
                      style={{
                        color: "#000",
                        fontSize: "16px",
                        userSelect: "none",
                      }}
                    >
                      {opt.text}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button type="submit" className="submit-btn">
            Submit & Get Recommendations
          </button>
        </form>

        {submitted && (
          <div className="result">
            <h3>
              Your score: {score} / {QUESTIONS.length * 2}
            </h3>

            <p>
              {score >= 8
                ? "Strong technical skills detected!"
                : score >= 4
                ? "Good potential — suitable for web technologies."
                : "Beginner level — start with HTML & CSS."}
            </p>

            <p>Redirecting to recommendations...</p>
          </div>
        )}
      </div>
    </div>
  );
}
