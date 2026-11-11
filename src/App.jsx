import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "./App.css";
import profile from './image/PROFILE.jpeg'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <>
      <nav className="navbar">
        <h2>PORTFOLIO WEBSITE</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </nav>

      <section id="home" className="home">

  <div className="home-content">
    <p>Hello, I'm</p>
    <h1>Bezalel Benny</h1>
    
    <h2>Pursuing BCA</h2>
    <p>I build web applications using Python, Django, Flask, React and MySQL.</p>
    <div className="home-buttons">
  <a href="#projects">View Projects</a>
  <a href="#contact">Contact Me</a>
</div>
  </div>
  <div className="home-image">
    <img src={profile} alt="Bezalel Benny" />
  </div>

</section>
      
    <section id="about" className="about">
        <h1>About Me</h1>
        <p>I am a BCA student passionate about software development
    and building practical web applications.</p>
    <p>I work with Python, Django, Flask, React and MySQL.
    I am currently focusing on backend development and
    improving my problem-solving skills.</p>
    </section>
<section id="skills" className="skills">
  <h1>My Skills</h1>

  <p className="skills-intro">
    Technologies and tools I use to build applications
    and solve problems.
  </p>

  <div className="skills-container">

    <div className="skill-category">
      <h2>Programming Languages</h2>
      <div className="skill-list">
        <span>Python</span>
        <span>Java</span>
        <span>C</span>
        <span>JavaScript</span>
      </div>
    </div>

    <div className="skill-category">
      <h2>Frontend Development</h2>
      <div className="skill-list">
        <span>HTML</span>
        <span>CSS</span>
        <span>React</span>
      </div>
    </div>

    <div className="skill-category">
      <h2>Backend Development</h2>
      <div className="skill-list">
        <span>Django</span>
        <span>Flask</span>
        <span>MySQL</span>
      </div>
    </div>

    <div className="skill-category">
      <h2>Other Technologies</h2>
      <div className="skill-list">
        <span>Flutter</span>
        <span>Power BI</span>
        <span>Git & GitHub</span>
      </div>
    </div>

  </div>
</section>
<section id="projects" className="projects">
  <h1>My Projects</h1>
  <p className="project-intro">
    Some of the projects I've developed while learning and
    exploring different technologies.
  </p>

  <div className="project-container">

    <div className="project-card">
      <h2>Attendance Tracker</h2>
      <p>
        A Flutter-based attendance tracking application
        that allows users to view student profiles and
        manage attendance records.
      </p>
      <span>Flutter • Dart</span>
    </div>

    <div className="project-card">
      <a
  href="https://frontend-blush-gamma-62.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  <h2>E-commerce Application</h2>
</a>

<p>
  A web application with user authentication,
  admin management and product browsing using
  React, Express and MySQL.
</p>

<span>React • Express • MySQL</span>
    </div>

    <div className="project-card">
      <h2>RBAC Form Application</h2>
      <p>
        A Flask-based application implementing
        Role-Based Access Control to manage access
        according to user roles.
      </p>
      <span>Python • Flask</span>
    </div>

    <div className="project-card">
      <h2>AI & Data Science Internship Projects</h2>
      <p>
        Worked on data visualization, machine learning,
        Django applications and a RAG-based chatbot
        during an 8-week internship.
      </p>
      <span>Python • Django • Power BI • AI</span>
    </div>

  </div>
</section>



<section id="contact" className="contact">
  <h1>Get In Touch</h1>

  <p>
    I'm currently looking for opportunities to learn,
    grow and contribute as a developer.
    Feel free to contact me.
  </p>

  <div className="contact-links">

    <a href="mailto:bezalelbenny@gmail.com">
      <span>Email Me</span>
    </a>

    <a
      href="https://www.linkedin.com/in/bezalel-benny-103492371/"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>

    <a
      href="https://github.com/Bezalelbenny"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>

  </div>
</section>


    </>
  );
}

export default App;