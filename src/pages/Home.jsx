export default function Home() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const isLoggedIn = true;

  const students = [
    { id: 1, name: "Alice Johnson", course: "Computer Science", marks: 92 },
    { id: 2, name: "Bob Smith",     course: "Mathematics",      marks: 85 },
    { id: 3, name: "Carol White",   course: "Physics",          marks: 78 },
    { id: 4, name: "David Brown",   course: "Chemistry",        marks: 88 },
  ];

  const getGrade = (marks) => {
    if (marks >= 90) return { label: "A+", color: "#1a7f37" };
    if (marks >= 80) return { label: "A",  color: "#1a73e8" };
    if (marks >= 70) return { label: "B",  color: "#f59e0b" };
    return                    { label: "C",  color: "#e53935" };
  };

  return (
    <div className="page">

      {/* ── Page Header ── */}
      <div className="page-header">
        <h2>Welcome to the Portal</h2>
        <p>
          Manage student records, track performance, and stay organized —
          all in one place.
        </p>
      </div>

      {/* ── Info Bar ── */}
      <div className="info-bar">
        <span className="info-bar-item">📅 {today}</span>
        <span className={isLoggedIn ? "status-badge status-green" : "status-badge status-red"}>
          {isLoggedIn ? "✅ Logged In" : "❌ Not Logged In"}
        </span>
      </div>

      {/* ── Registered Students ── */}
      <div className="section-card">
        <div className="section-card-header">
          <span className="section-card-icon">🎓</span>
          <span className="section-card-title">Registered Students</span>
        </div>
        <div className="section-card-body">
          <ul className="student-list">
            {students.map((student) => (
              <li key={student.id} className="student-list-item">
                <span className="student-list-num">{student.id}</span>
                <span className="student-list-name">{student.name}</span>
                <span className="student-list-course">— {student.course}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Marks Table ── */}
      <div className="section-card">
        <div className="section-card-header">
          <span className="section-card-icon">📊</span>
          <span className="section-card-title">Student Marks Table</span>
        </div>
        <div className="section-card-body">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Marks</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                const grade = getGrade(student.marks);
                return (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td style={{ fontWeight: "600" }}>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.marks}</td>
                    <td>
                      <span style={{
                        background: grade.color + "18",
                        color: grade.color,
                        border: `1px solid ${grade.color}40`,
                        borderRadius: "6px",
                        padding: "2px 10px",
                        fontWeight: "700",
                        fontSize: "0.82rem",
                      }}>
                        {grade.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}