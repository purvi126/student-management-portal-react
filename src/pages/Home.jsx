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

  const styles = {
    page: {
      padding: "32px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: "860px",
    },
    banner: {
      background: "linear-gradient(135deg, #1a73e8, #0d47a1)",
      color: "white",
      borderRadius: "12px",
      padding: "28px 32px",
      marginBottom: "28px",
      boxShadow: "0 4px 12px rgba(26,115,232,0.3)",
    },
    bannerTitle: {
      fontSize: "1.8rem",
      fontWeight: "700",
      marginBottom: "8px",
    },
    bannerSub: {
      fontSize: "0.95rem",
      opacity: 0.85,
      marginBottom: "12px",
    },
    dateBadge: {
      display: "inline-block",
      background: "rgba(255,255,255,0.2)",
      borderRadius: "20px",
      padding: "4px 14px",
      fontSize: "0.85rem",
    },
    loginBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 16px",
      borderRadius: "8px",
      fontWeight: "600",
      fontSize: "0.9rem",
      marginBottom: "28px",
      background: isLoggedIn ? "#e6f4ea" : "#fce8e6",
      color:      isLoggedIn ? "#1a7f37" : "#c62828",
      border:     `1px solid ${isLoggedIn ? "#a8d5b5" : "#f5a8a8"}`,
    },
    sectionTitle: {
      fontSize: "1.1rem",
      fontWeight: "700",
      color: "#1a1a2e",
      marginBottom: "12px",
      paddingBottom: "6px",
      borderBottom: "2px solid #1a73e8",
      display: "inline-block",
    },
    listCard: {
      background: "#ffffff",
      border: "1px solid #dde3ed",
      borderRadius: "10px",
      padding: "16px 20px",
      marginBottom: "32px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    },
    listItem: {
      padding: "8px 0",
      borderBottom: "1px solid #f0f0f0",
      fontSize: "0.92rem",
      color: "#444",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    tableWrapper: {
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      border: "1px solid #c5d3e8",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "0.92rem",
    },
    th: {
      background: "#1a73e8",
      color: "white",
      padding: "12px 16px",
      textAlign: "left",
      fontWeight: "600",
      fontSize: "0.85rem",
      letterSpacing: "0.03em",
      borderRight: "1px solid rgba(255,255,255,0.15)",
    },
    td: {
      padding: "11px 16px",
      borderBottom: "1px solid #dde3ed",
      borderRight: "1px solid #dde3ed",
      color: "#333",
    },
    tdLast: {
      padding: "11px 16px",
      borderBottom: "1px solid #dde3ed",
      color: "#333",
    },
  };

  return (
    <div style={styles.page}>

      {/* Banner */}
      <div style={styles.banner}>
        <div style={styles.bannerTitle}>📚 Student Management Portal</div>
        <div style={styles.bannerSub}>
          Manage student records, track performance, and stay organized — all in one place.
        </div>
        <span style={styles.dateBadge}>📅 {today}</span>
      </div>

      {/* Login Status */}
      <div style={styles.loginBadge}>
        {isLoggedIn ? "✅ You are logged in" : "❌ Please log in to continue"}
      </div>

      {/* Student List */}
      <div>
        <div style={styles.sectionTitle}>🎓 Registered Students</div>
        <div style={styles.listCard}>
          {students.map((student, index) => (
            <div
              key={student.id}
              style={{
                ...styles.listItem,
                borderBottom: index === students.length - 1 ? "none" : "1px solid #f0f0f0",
              }}
            >
              <span style={{
                background: "#e8f0fe",
                color: "#1a73e8",
                borderRadius: "50%",
                width: "26px",
                height: "26px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "700",
                fontSize: "0.8rem",
                flexShrink: 0,
              }}>
                {student.id}
              </span>
              <strong>{student.name}</strong>
              <span style={{ color: "#888", fontSize: "0.85rem" }}>— {student.course}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marks Table */}
      <div>
        <div style={styles.sectionTitle}>📊 Student Marks Table</div>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Course</th>
                <th style={styles.th}>Marks</th>
                <th style={{ ...styles.th, borderRight: "none" }}>Grade</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => {
                const grade = getGrade(student.marks);
                const isLast = index === students.length - 1;
                const rowBg = index % 2 === 0 ? "#ffffff" : "#f7f9ff";
                return (
                  <tr key={student.id} style={{ background: rowBg }}>
                    <td style={{ ...styles.td, borderBottom: isLast ? "none" : styles.td.borderBottom }}>{student.id}</td>
                    <td style={{ ...styles.td, borderBottom: isLast ? "none" : styles.td.borderBottom, fontWeight: "600" }}>{student.name}</td>
                    <td style={{ ...styles.td, borderBottom: isLast ? "none" : styles.td.borderBottom }}>{student.course}</td>
                    <td style={{ ...styles.td, borderBottom: isLast ? "none" : styles.td.borderBottom }}>
                      <div style={{
                        background: "#f0f2f5",
                        borderRadius: "20px",
                        height: "8px",
                        width: "100px",
                        overflow: "hidden",
                        display: "inline-block",
                        marginRight: "8px",
                        verticalAlign: "middle",
                      }}>
                        <div style={{
                          height: "100%",
                          width: `${student.marks}%`,
                          background: grade.color,
                          borderRadius: "20px",
                        }} />
                      </div>
                      {student.marks}
                    </td>
                    <td style={{ ...styles.tdLast, borderBottom: isLast ? "none" : styles.tdLast.borderBottom }}>
                      <span style={{
                        background: grade.color + "1a",
                        color: grade.color,
                        border: `1px solid ${grade.color}`,
                        borderRadius: "6px",
                        padding: "2px 10px",
                        fontWeight: "700",
                        fontSize: "0.85rem",
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