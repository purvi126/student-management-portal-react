import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:3001/students";
const initialForm = { name: "", email: "", course: "" };

export default function StudentCRUD() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState(initialForm);
  const [editId, setEditId]     = useState(null);
  const [error, setError]       = useState("");

  // Fetch all students on mount
  useEffect(() => {
    fetchStudents();
  }, []);

  function fetchStudents() {
    axios
      .get(API)
      .then((res) => setStudents(res.data))
      .catch(() => setError("⚠️ Could not fetch students. Is json-server running?"));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, course } = formData;
    if (!name.trim() || !email.trim() || !course.trim()) {
      setError("⚠️ All fields are required.");
      return;
    }

    setError("");

    if (editId !== null) {
      // UPDATE existing student
      axios
        .put(`${API}/${editId}`, formData)
        .then(() => {
          fetchStudents();
          setFormData(initialForm);
          setEditId(null);
        })
        .catch(() => setError("⚠️ Failed to update student."));
    } else {
      // ADD new student
      axios
        .post(API, formData)
        .then(() => {
          fetchStudents();
          setFormData(initialForm);
        })
        .catch(() => setError("⚠️ Failed to add student."));
    }
  }

  function handleEdit(student) {
    setEditId(student.id);
    setFormData({
      name:   student.name,
      email:  student.email,
      course: student.course,
    });
    setError("");
  }

  function handleDelete(id) {
    axios
      .delete(`${API}/${id}`)
      .then(() => fetchStudents())
      .catch(() => setError("⚠️ Failed to delete student."));
  }

  function handleCancel() {
    setEditId(null);
    setFormData(initialForm);
    setError("");
  }

  return (
    <div style={styles.wrapper}>
      <h3 style={styles.sectionTitle}>🎓 Student CRUD</h3>
      <p style={styles.sub}>
        Add, edit, or delete students. Data is stored in{" "}
        <strong>json-server</strong> at <code>localhost:3001</code>.
      </p>

      {/* ── Form ── */}
      <div style={styles.formCard}>
        <h4 style={styles.formTitle}>
          {editId !== null ? "✏️ Edit Student" : "➕ Add New Student"}
        </h4>

        <div style={styles.formGrid}>
          <div style={styles.field}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alice Johnson"
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. alice@email.com"
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- Select a course --</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
            </select>
          </div>
        </div>

        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.btnRow}>
          <button onClick={handleSubmit} style={styles.btnPrimary}>
            {editId !== null ? "✅ Update Student" : "➕ Add Student"}
          </button>
          {editId !== null && (
            <button onClick={handleCancel} style={styles.btnGray}>
              ✖ Cancel
            </button>
          )}
        </div>
      </div>

      {/* ── Table ── */}
      {students.length === 0 ? (
        <p style={styles.empty}>No students found. Add one above!</p>
      ) : (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Course</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => {
                const rowBg = index % 2 === 0 ? "#ffffff" : "#f7f9ff";
                const isEditing = editId === student.id;
                return (
                  <tr
                    key={student.id}
                    style={{
                      background: isEditing ? "#fff8e1" : rowBg,
                    }}
                  >
                    <td style={styles.td}>{index + 1}</td>
                    <td style={styles.tdBold}>{student.name}</td>
                    <td style={styles.td}>{student.email}</td>
                    <td style={styles.td}>{student.course}</td>
                    <td style={styles.td}>
                      <div style={styles.actionRow}>
                        <button
                          onClick={() => handleEdit(student)}
                          style={styles.btnEdit}
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={() => handleDelete(student.id)}
                          style={styles.btnDelete}
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    marginTop: "8px",
  },
  sectionTitle: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: "4px",
  },
  sub: {
    fontSize: "0.82rem",
    color: "#888",
    marginBottom: "16px",
  },
  formCard: {
    background: "#ffffff",
    border: "1px solid #dde3ed",
    borderRadius: "12px",
    padding: "20px 24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
    maxWidth: "680px",
    marginBottom: "24px",
  },
  formTitle: {
    fontSize: "0.95rem",
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: "16px",
  },
  formGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    flex: "1 1 180px",
  },
  label: {
    fontSize: "0.82rem",
    fontWeight: "600",
    color: "#333",
  },
  input: {
    padding: "8px 10px",
    borderRadius: "8px",
    border: "1px solid #c5d3e8",
    fontSize: "0.88rem",
    color: "#333",
    background: "#f7f9ff",
    outline: "none",
    width: "100%",
  },
  error: {
    fontSize: "0.85rem",
    color: "#c62828",
    background: "#fce8e6",
    border: "1px solid #f5a8a8",
    borderRadius: "8px",
    padding: "8px 12px",
    marginTop: "12px",
  },
  btnRow: {
    display: "flex",
    gap: "10px",
    marginTop: "16px",
  },
  btnPrimary: {
    padding: "9px 18px",
    background: "#1a73e8",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "0.88rem",
    fontWeight: "600",
    cursor: "pointer",
  },
  btnGray: {
    padding: "9px 18px",
    background: "#757575",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "0.88rem",
    fontWeight: "600",
    cursor: "pointer",
  },
  empty: {
    fontSize: "0.9rem",
    color: "#888",
    padding: "12px 0",
  },
  tableWrapper: {
    borderRadius: "10px",
    overflow: "hidden",
    border: "1px solid #c5d3e8",
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
    maxWidth: "680px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "0.9rem",
  },
  th: {
    background: "#1a73e8",
    color: "white",
    padding: "11px 16px",
    textAlign: "left",
    fontWeight: "600",
    fontSize: "0.85rem",
    borderRight: "1px solid rgba(255,255,255,0.15)",
  },
  td: {
    padding: "10px 16px",
    borderBottom: "1px solid #dde3ed",
    borderRight: "1px solid #dde3ed",
    color: "#333",
  },
  tdBold: {
    padding: "10px 16px",
    borderBottom: "1px solid #dde3ed",
    borderRight: "1px solid #dde3ed",
    color: "#333",
    fontWeight: "600",
  },
  actionRow: {
    display: "flex",
    gap: "8px",
  },
  btnEdit: {
    padding: "5px 10px",
    background: "#f59e0b",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "0.8rem",
    fontWeight: "600",
    cursor: "pointer",
  },
  btnDelete: {
    padding: "5px 10px",
    background: "#e53935",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "0.8rem",
    fontWeight: "600",
    cursor: "pointer",
  },
};