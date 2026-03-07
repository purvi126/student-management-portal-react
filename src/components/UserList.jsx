import { useState, useEffect } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("⚠️ Failed to fetch users. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={styles.loading}>⏳ Loading users...</p>;
  }

  if (error) {
    return <p style={styles.error}>{error}</p>;
  }

  return (
    <div style={styles.wrapper}>
      <h3 style={styles.title}>👥 User List</h3>
      <p style={styles.sub}>
        Fetched from jsonplaceholder.typicode.com
      </p>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>#</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              const rowStyle = {
                background: index % 2 === 0 ? "#ffffff" : "#f7f9ff",
              };
              return (
                <tr key={user.id} style={rowStyle}>
                  <td style={styles.td}>{user.id}</td>
                  <td style={styles.tdBold}>{user.name}</td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={styles.td}>{user.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    marginTop: "8px",
  },
  title: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: "4px",
  },
  sub: {
    fontSize: "0.82rem",
    color: "#888",
    marginBottom: "12px",
  },
  loading: {
    fontSize: "0.95rem",
    color: "#1a73e8",
    padding: "12px 0",
  },
  error: {
    fontSize: "0.9rem",
    color: "#c62828",
    background: "#fce8e6",
    border: "1px solid #f5a8a8",
    borderRadius: "8px",
    padding: "10px 14px",
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
};