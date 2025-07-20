import React from "react";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <h1>👋 Hi, I'm Joseph Onyenemerem</h1>
      <h2>Fullstack Developer & DevOps Enthusiast</h2>

      <p>
        I specialize in building fullstack web applications with React, Node.js, TypeScript, and MongoDB.
      </p>

      <hr />

      <h3>🚀 Featured Project</h3>
      <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
        <h4>🛣️ RoadSense Dashboard</h4>
        <p>
          A data-driven web app to upload, analyze, and visualize road condition data.
        </p>
        <ul>
          <li>🔐 JWT Auth + Protected Routes</li>
          <li>📤 CSV Upload & Export</li>
          <li>📊 Dashboard Visualization</li>
          <li>💾 MongoDB Storage</li>
        </ul>
        <a
          href="https://github.com/stacknerdjoe/roadsense-dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub →
        </a>
      </div>

      <h3>📫 Contact</h3>
      <p>
        📧 Email: <a href="mailto:joseph.onyenemerem@yahoo.com">joseph.onyenemerem@yahoo.com</a> <br />
        🧑‍💻 GitHub: <a href="https://github.com/stacknerdjoe">github.com/stacknerdjoe</a>
      </p>
    </div>
  );
};

export default App;
