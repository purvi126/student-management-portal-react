import { useState } from "react";

const initialForm = { name: "", email: "", course: "" };

export default function StudentForm() {
  const [formData, setFormData]     = useState(initialForm);
  const [error, setError]           = useState("");
  const [submitted, setSubmitted]   = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, course } = formData;

    // Validation
    if (!name.trim() || !email.trim() || !course.trim()) {
      setError("⚠️ All fields are required. Please fill in every field.");
      return;
    }

    // Save submitted data and reset
    setSubmitted(formData);
    setFormData(initialForm);
    setError("");
  }

  return (
    <div style={styles.wrapper}>

      <form onSubmit={handleSubmit} style={styles.form}>

        {/* Name */}
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

        {/* Email */}
        <div style={styles.field}>
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. alice@email.com"
            style={styles.input}
          />
        </div>

        {/* Course */}
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

        {/* Error message */}
        {error && (
          <p style={styles.error}>{error}</p>
        )}

        {/* Submit */}
        <button type="submit" style={styles.button}>
          Submit
        </button>

      </form>

      {/* Submitted data display */}
      {submitted && (
        <div style={styles.result}>
          <h4 style={styles.resultTitle}>✅ Form Submitted Successfully!</h4>
          <p style={styles.resultItem}>
            <span style={styles.resultLabel}>Name:</span> {submitted.name}
          </p>
          <p style={styles.resultItem}>
            <span style={styles.resultLabel}>Email:</span> {submitted.email}
          </p>
          <p style={styles.resultItem}>
            <span style={styles.resultLabel}>Course:</span> {submitted.course}
          </p>
        </div>
      )}

    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    maxWidth: "460px",
  },
  form: {
    background: "#ffffff",
    border: "1px solid #dde3ed",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "#333",
  },
  input: {
    padding: "9px 12px",
    borderRadius: "8px",
    border: "1px solid #c5d3e8",
    fontSize: "0.9rem",
    color: "#333",
    outline: "none",
    background: "#f7f9ff",
    width: "100%",
  },
  error: {
    color: "#c62828",
    background: "#fce8e6",
    border: "1px solid #f5a8a8",
    borderRadius: "8px",
    padding: "8px 12px",
    fontSize: "0.85rem",
    margin: "0",
  },
  button: {
    padding: "10px",
    background: "#1a73e8",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "0.95rem",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "4px",
  },
  result: {
    background: "#e6f4ea",
    border: "1px solid #a8d5b5",
    borderRadius: "12px",
    padding: "20px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  resultTitle: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#1a7f37",
    marginBottom: "4px",
  },
  resultItem: {
    fontSize: "0.9rem",
    color: "#333",
    margin: "0",
  },
  resultLabel: {
    fontWeight: "600",
    color: "#1a7f37",
  },
};