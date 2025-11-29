import { useState, useEffect } from "react";

export default function CareerRecommendations() {
  const [recs, setRecs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get score from localStorage (assuming you stored it during skill eval)
    const score = localStorage.getItem("skillScore") || 0;
    const s = parseInt(score);

    let recommendations = [];

    if (s >= 8) {
      recommendations = [
        {
          title: "C Programming",
          why: "Your strong problem-solving indicates you can handle low-level logic.",
          learn: ["Pointers", "Memory", "Structures"]
        },
        {
          title: "C++ Programming",
          why: "High aptitude suits object-oriented and performance-oriented languages.",
          learn: ["OOP", "STL", "Data Structures"]
        },
        {
          title: "Java Developer",
          why: "Excellent for strong logical thinkers and backend careers.",
          learn: ["OOP", "Java Basics", "Spring Intro"]
        },
      ];
    } 
    else if (s >= 4) {
      recommendations = [
        {
          title: "HTML Developer",
          why: "You have good potential in structured web development.",
          learn: ["HTML5", "Semantic Tags"]
        },
        {
          title: "CSS / UI Styling",
          why: "Creative + logical balance works well in front-end styling.",
          learn: ["Flexbox", "Grid", "Animations"]
        },
        {
          title: "JavaScript Basics",
          why: "This is the next step after HTML/CSS and fits your skill level.",
          learn: ["Basics", "DOM", "Functions"]
        },
      ];
    } 
    else {
      recommendations = [
        {
          title: "HTML Basics",
          why: "The easiest entry point into tech.",
          learn: ["Tags", "Images", "Links"]
        },
        {
          title: "CSS Basics",
          why: "Good for beginners to learn styling fundamentals.",
          learn: ["Colors", "Fonts", "Layouts"]
        }
      ];
    }

    setRecs(recommendations);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading recommendations...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Career Recommendations</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {recs.map((rec, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px" }}>
            <h3>{rec.title}</h3>
            <p><strong>Why:</strong> {rec.why}</p>
            <p><strong>Learn:</strong> {rec.learn.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
