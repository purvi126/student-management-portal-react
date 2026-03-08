import StudentCard from "../components/StudentCard";

export default function About() {
  return (
    <div className="page">

      {/* ── Page Header ── */}
      <div className="page-header">
        <h2>About This Portal</h2>
        <p>
          The Student Management Portal is a beginner-friendly React project
          designed to demonstrate core concepts like components, props,
          PropTypes, defaultProps, CSS Modules, and routing — all in one
          clean mini project.
        </p>
      </div>

      {/* ── Tech Used ── */}
      <div className="section-card">
        <div className="section-card-header">
          <span className="section-card-icon">🛠️</span>
          <span className="section-card-title">Tech Stack</span>
        </div>
        <div className="section-card-body">
          <ul className="tech-list">
            <li className="tech-list-item">⚛️ <strong>React</strong> — component-based UI</li>
            <li className="tech-list-item">⚡ <strong>Vite</strong> — fast dev build tool</li>
            <li className="tech-list-item">🔀 <strong>React Router DOM</strong> — client-side routing</li>
            <li className="tech-list-item">📡 <strong>Axios</strong> — HTTP requests</li>
            <li className="tech-list-item">🗄️ <strong>JSON Server</strong> — mock REST API</li>
            <li className="tech-list-item">✅ <strong>PropTypes</strong> — prop validation</li>
          </ul>
        </div>
      </div>

      {/* ── Student Cards ── */}
      <div className="section-card">
        <div className="section-card-header">
          <span className="section-card-icon">👥</span>
          <span className="section-card-title">Meet Our Students</span>
        </div>
        <div className="section-card-body">
          <div className="cards-grid">
            <StudentCard name="Alice Johnson" age={20} course="Computer Science" />
            <StudentCard name="Bob Smith"     age={22} course="Mathematics"      />
            <StudentCard name="Carol White"   age={21} course="Physics"          />
            <StudentCard />
          </div>
          <p className="hint-text">
            * The last card has no props — it is showing <strong>defaultProps</strong> values.
          </p>
        </div>
      </div>

    </div>
  );
}