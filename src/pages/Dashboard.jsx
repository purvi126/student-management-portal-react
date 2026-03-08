import Counter from "../components/Counter";
import Timer from "../components/Timer";
import UserList from "../components/UserList";
import StudentCRUD from "../components/StudentCRUD";

export default function Dashboard() {
  return (
    <div className="page">

      <div className="page-header">
        <h2>Dashboard</h2>
        <p>
          This dashboard brings together interactive tools, live API data, and
          student record management in one place.
        </p>
      </div>

      {/* ── Interactive Tools ── */}
      <div className="section-card">
        <div className="section-card-header">
          <span className="section-card-icon">⚙️</span>
          <span className="section-card-title">Interactive Tools</span>
        </div>
        <div className="section-card-body">
          <p className="section-desc">
            Use these components to test state updates and timed actions.
          </p>
          <div className="widget-row">
            <Counter />
            <Timer />
          </div>
        </div>
      </div>

      {/* ── Live API Data ── */}
      <div className="section-card">
        <div className="section-card-header">
          <span className="section-card-icon">🌐</span>
          <span className="section-card-title">Live API Data</span>
        </div>
        <div className="section-card-body">
          <p className="section-desc">
            This section displays user data fetched from a public API.
          </p>
          <UserList />
        </div>
      </div>

      {/* ── Student Records Manager ── */}
      <div className="section-card">
        <div className="section-card-header">
          <span className="section-card-icon">🎓</span>
          <span className="section-card-title">Student Records Manager</span>
        </div>
        <div className="section-card-body">
          <p className="section-desc">
            Add, edit, view, and delete student records using JSON Server as a
            local backend.
          </p>
          <StudentCRUD />
        </div>
      </div>

    </div>
  );
}