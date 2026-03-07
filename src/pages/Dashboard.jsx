import Counter from "../components/Counter";
import Timer from "../components/Timer";
import UserList from "../components/UserList";
import StudentCRUD from "../components/StudentCRUD";

export default function Dashboard() {
  return (
    <div className="page">

      <h2>Dashboard</h2>
      <p>
        This dashboard demonstrates <strong>useState</strong> and{" "}
        <strong>useEffect</strong> in action through an interactive counter,
        a live timer, a live API fetch using <strong>axios</strong>, and a
        full <strong>CRUD</strong> student manager powered by json-server.
      </p>

      {/* Counter & Timer */}
      <div className="section-card">
        <p className="section-card-title">Interactive Components</p>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <Counter />
          <Timer />
        </div>
      </div>

      {/* User List */}
      <div className="section-card">
        <p className="section-card-title">API Users</p>
        <UserList />
      </div>

      {/* Student CRUD */}
      <div className="section-card">
        <p className="section-card-title">Student Manager</p>
        <StudentCRUD />
      </div>

    </div>
  );
}