import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "./components/ProjectCard";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#F7F9FB" }}>
      {/* ✅ Hero Banner */}
      <section
        style={{
          textAlign: "center",
          padding: "4rem 1rem",
          background: "#f5f9ff",
          borderRadius: "8px",
          marginBottom: "3rem",
        }}
        data-aos="fade-up"
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>👋 Hi, I'm Joseph</h1>
        <p style={{ fontSize: "1.25rem", color: "#444" }}>
          Fullstack Developer • DevOps Enthusiast • Cloud Curious
        </p>
        <a
          href="#projects"
          style={{
            display: "inline-block",
            marginTop: "1.5rem",
            padding: "10px 20px",
            backgroundColor: "#0077ff",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          🚀 View My Projects
        </a>
      </section>

      {/* ✅ Main Container */}
      <div style={{ maxWidth: "960px", margin: "auto", padding: "1rem" }}>
        <section id="projects">
          <h2 style={{ color: "#0077FF" }} data-aos="fade-right">
            🚀 Featured Projects
          </h2>

          <div data-aos="fade-up">
            <ProjectCard
              title="🛣️ RoadSense Dashboard"
              description="A data-driven app for uploading, analyzing, and visualizing road condition data (CSV, Charts, MongoDB)."
              github="https://github.com/stacknerdjoe/roadsense-dashboard"
              live="https://roadsense-dashboard-pbuf.vercel.app"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <ProjectCard
              title="📁 Developer Portfolio"
              description="My personal portfolio site built with React and deployed on Vercel."
              github="https://github.com/stacknerdjoe/portfolio-site"
              live="https://joseph-portfolio-sepia.vercel.app"
            />
          </div>
        </section>

        <hr style={{ margin: "3rem 0" }} />

        {/* ✅ Contact Section */}
        <section data-aos="fade-up">
          <h3>📫 Contact</h3>
          <p>
            📧 Email:{" "}
            <a href="mailto:joseph.onyenemerem@yahoo.com">joseph.onyenemerem@yahoo.com</a>
            <br />
            🧑‍💻 GitHub:{" "}
            <a href="https://github.com/stacknerdjoe">github.com/stacknerdjoe</a>
          </p>
        </section>

        {/* ✅ Footer */}
        <footer style={{ textAlign: "center", marginTop: "4rem", color: "#888" }}>
          © {new Date().getFullYear()} Joseph Onyenemerem — Built with React ⚛️
        </footer>
      </div>
    </div>
  );
};

export default App;
