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
        <h1 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "1rem" }}>👋 Hi, I'm Joseph</h1>
        <p style={{ fontSize: "1.25rem", color: "#555" , fontWeight: 500 }}>
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

      {/* ✅ About Me Section */}
      <section
        id="about"
        style={{
          maxWidth: "800px",
          margin: "0 auto 3rem",
          padding: "2rem",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        }}
        data-aos="fade-up"
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            color: "#0077FF",
            borderBottom: "2px solid #eee",
            paddingBottom: "0.5rem",
          }}
        >
          👨‍💻 About Me
        </h2>
        <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "#444" }}>
          I'm <strong>Joseph Onyenemerem</strong>, a Fullstack Developer and DevOps enthusiast with a passion for
          building performant and user-friendly web applications. I specialize in the <strong>MERN stack</strong> and
          am actively expanding my skills in <strong>AWS and cloud infrastructure</strong>. I enjoy solving real-world
          problems with clean, scalable code and collaborating on impactful projects.
        </p>
      </section>

      {/* ✅ Main Container */}
      <div style={{ maxWidth: "960px", margin: "auto", padding: "1rem" }}>
      <section id="projects" style={{ marginBottom: "4rem" }}>
  <h2
    style={{
      color: "#0077FF",
      marginBottom: "2rem",
      fontSize: "2rem",
      textAlign: "center",
    }}
    data-aos="fade-right"
  >
    🚀 Featured Projects
  </h2>

  <div style={{ display: "grid", gap: "2rem" }}>
    <div data-aos="fade-up">
      <ProjectCard
        title="🎬 NaijaMart Movie Review App"
        description="Fullstack MERN app for browsing, rating, and managing movies. Features admin panel, role-based access, Cloudinary integration, and email verification."
        github="https://github.com/stacknerdjoe/naija-mart-app"
        live=""
      />
    </div>

    <div data-aos="fade-up" data-aos-delay="200">
      <ProjectCard
        title="🛣️ RoadSense Dashboard"
        description="A data-driven app for uploading, analyzing, and visualizing road condition data (CSV, Charts, MongoDB)."
        github="https://github.com/stacknerdjoe/roadsense-dashboard"
        live="https://roadsense-dashboard.vercel.app"
      />
    </div>

    <div data-aos="fade-up" data-aos-delay="300">
      <ProjectCard
        title="📁 Developer Portfolio"
        description="My personal portfolio site built with React and deployed on Vercel."
        github="https://github.com/stacknerdjoe/portfolio-site"
        live="https://joseph-portfolio-sepia.vercel.app"
      />
    </div>
  </div>
</section>


        <hr style={{ margin: "3rem 0" }} />

        {/* ✅ Contact Section */}
        <section data-aos="fade-up" style={{ marginTop: "3rem" }}>
  <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#0077FF" }}>
    📫 Contact
  </h3>
  <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#444" }}>
    📧 Email:{" "}
    <a
      href="mailto:joseph.onyenemerem@yahoo.com"
      style={{ color: "#00b894", fontWeight: 500, textDecoration: "none" }}
    >
      joseph.onyenemerem@yahoo.com
    </a>
    <br />
    🧑‍💻 GitHub:{" "}
    <a
      href="https://github.com/stacknerdjoe"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#00b894", fontWeight: 500, textDecoration: "none" }}
    >
      github.com/stacknerdjoe
    </a>
    <br />
    🔗 LinkedIn:{" "}
    <a
      href="https://www.linkedin.com/in/joseph-onyenemerem-946201b6"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#00b894", fontWeight: 500, textDecoration: "none" }}
    >
      linkedin.com/in/joseph-onyenemerem-946201b6
    </a>
  </p>
</section>


        {/* ✅ Footer */}
        <footer
  style={{
    textAlign: "center",
    marginTop: "4rem",
    padding: "2rem 1rem",
    backgroundColor: "#f0f4f8",
    color: "#777",
    fontSize: "0.95rem",
  }}
>
  <p>
    © {new Date().getFullYear()} Joseph Onyenemerem — Built with 💙 React & Devotion
  </p>
</footer>

      </div>
    </div>
  );
};

export default App;
