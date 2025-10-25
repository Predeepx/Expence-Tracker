import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About This App</h1>

      <p className="about-intro">
        Welcome to <strong>Finance Tracker</strong> — a simple tool to help you
        manage your income, expenses, and savings efficiently.
      </p>

      <section className="about-section">
        <h2>💡 What It Does</h2>
        <ul>
          <li>Track income, expenses, and savings easily.</li>
          <li>Automatically calculate your balance in real time.</li>
          <li>Store data locally — your information stays private.</li>
          <li>View and manage past transactions anytime.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>👨‍💻 About the Developer</h2>
        <p>
          Hi there! I’m <strong>[Your Name]</strong>, a passionate front-end
          developer who loves building practical and user-friendly web apps.
          This Finance Tracker project was created to make personal budgeting
          simpler while learning and improving my React.js skills.
        </p>
        <p>
          You can connect with me here:
          <br />
          <a
            href="https://github.com/Predeepx"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐙 GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/predeep-m/"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 LinkedIn
          </a>{" "}
          | <a href="m.predeep1@gmail.com">✉️ Email</a>
        </p>
      </section>

      <section className="about-section">
        <h2>🧰 Tech Stack</h2>
        <ul className="tech-list">
          <li>⚛️ React.js — for building the user interface</li>
          <li>🎨 CSS3 — for clean and responsive styling</li>
          <li>💾 LocalStorage — for saving your data locally</li>
          <li>🧮 JavaScript (ES6+) — for core logic and calculations</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>🚀 Roadmap / Future Improvements</h2>
        <ul className="roadmap-list">
          <li>✅ Local storage data persistence</li>
          <li>✅ Real-time balance calculation</li>
          <li>⏳ Add category-based budgets</li>
          <li>⏳ Implement dark/light mode toggle</li>
          <li>⏳ Add charts for income and expense visualization</li>
          <li>⏳ Export data to Excel or CSV</li>
        </ul>
      </section>

      <footer className="about-footer">
        <p>
          © {new Date().getFullYear()} Finance Tracker. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default About;
