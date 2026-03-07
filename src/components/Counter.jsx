import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Update document title whenever count changes
  useEffect(() => {
    document.title = `Count: ${count} — Student Portal`;
  }, [count]);

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>🔢 Counter</h3>

      <p style={styles.count}>{count}</p>

      <div style={styles.btnRow}>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          style={{ ...styles.btn, background: "#e53935" }}
        >
          − Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ ...styles.btn, background: "#757575" }}
        >
          Reset
        </button>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          style={{ ...styles.btn, background: "#1a73e8" }}
        >
          + Increment
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#ffffff",
    border: "1px solid #dde3ed",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
    maxWidth: "320px",
    textAlign: "center",
  },
  title: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: "16px",
  },
  count: {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#1a73e8",
    margin: "0 0 20px 0",
  },
  btnRow: {
    display: "flex",
    gap: "8px",
    justifyContent: "center",
  },
  btn: {
    padding: "8px 14px",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "0.85rem",
    fontWeight: "600",
    cursor: "pointer",
  },
};