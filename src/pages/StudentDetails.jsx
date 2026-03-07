import { useParams, Link } from "react-router-dom";

const students = [
  { id: "1", name: "Alice Johnson", age: 20, course: "Computer Science", grade: "A+", email: "alice@email.com" },
  { id: "2", name: "Bob Smith",     age: 22, course: "Mathematics",      grade: "A",  email: "bob@email.com"   },
  { id: "3", name: "Carol White",   age: 21, course: "Physics",          grade: "B+", email: "carol@email.com" },
  { id: "4", name: "David Brown",   age: 23, course: "Chemistry",        grade: "A",  email: "david@email.com" },
];

export default function StudentDetails() {
  const { id } = useParams();
  const student = students.find((s) => s.id === id);

  // ── Not Found ──
  if (!student) {
    return (
      <div className="page">
        <h2>Student Details</h2>
        <p style={styles.sub}>Showing details for student ID: <strong>{id}</strong></p>

        <div style={styles.notFound}>
          <p style={styles.notFoundIcon}>🔍</p>
          <p style={styles.notFoundText}>Student not found.</p>
          <p style={styles.notFoundSub}>No student exists with ID <strong>{id}</strong>.</p>
        </div>

        <Link to="/dashboard" style={styles.backLink}>
          ← Back to Dashboard
        </Link>
      </div>
    );
  }

  // ── Found ──
  return (
    <div className="page">
      <h2>Student Details</h2>
      <p style={styles.sub}>
        Showing details for student ID: <strong>{id}</strong>
      </p>

      <div style={styles.card}>

        {/* Avatar */}
        <div style={styles.avatarRow}>
          <div style={styles.avatar}>
            {student.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 style={styles.studentName}>{student.name}</h3>
            <p style={styles.studentCourse}>{student.course}</p>
          </div>
        </div>

        <hr style={styles.divider} />

        {/* Details */}
        <div style={styles.detailGrid}>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>Age</span>
            <span style={styles.detailValue}>{student.age}</span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>Course</span>
            <span style={styles.detailValue}>{student.course}</span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>Email</span>
            <span style={styles.detailValue}>{student.email}</span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>Grade</span>
            <span style={styles.gradeBadge}>{student.grade}</span>
          </div>
        </div>

      </div>

      <Link to="/dashboard" style={styles.backLink}>
        ← Back to Dashboard
      </Link>
    </div>
  );
}

const styles = {
  sub: {
    fontSize: "0.9rem",
    color: "#888",
    marginBottom: "24px",
  },
  card: {
    background: "#ffffff",
    border: "1px solid #dde3ed",
    borderRadius: "12px",
    padding: "24px",
    maxWidth: "420px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
    marginBottom: "24px",
  },
  avatarRow: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "16px",
  },
  avatar: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #1a73e8, #0d47a1)",
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  studentName: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#1a1a2e",
    margin: "0 0 4px 0",
  },
  studentCourse: {
    fontSize: "0.85rem",
    color: "#888",
    margin: 0,
  },
  divider: {
    border: "none",
    borderTop: "1px solid #eee",
    marginBottom: "16px",
  },
  detailGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  detailItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.9rem",
  },
  detailLabel: {
    fontWeight: "600",
    color: "#555",
  },
  detailValue: {
    color: "#333",
  },
  gradeBadge: {
    background: "#e8f0fe",
    color: "#1a73e8",
    border: "1px solid #c5d3e8",
    borderRadius: "6px",
    padding: "2px 12px",
    fontWeight: "700",
    fontSize: "0.85rem",
  },
  notFound: {
    background: "#fff8e1",
    border: "1px solid #ffe082",
    borderRadius: "12px",
    padding: "28px 24px",
    maxWidth: "380px",
    textAlign: "center",
    marginBottom: "24px",
  },
  notFoundIcon: {
    fontSize: "2rem",
    margin: "0 0 8px 0",
  },
  notFoundText: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#1a1a2e",
    margin: "0 0 6px 0",
  },
  notFoundSub: {
    fontSize: "0.88rem",
    color: "#888",
    margin: 0,
  },
  backLink: {
    display: "inline-block",
    color: "#1a73e8",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "600",
  },
};