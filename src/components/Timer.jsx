import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds]   = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Start or stop the interval based on isRunning
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup: clear interval when component unmounts or isRunning changes
    return () => clearInterval(interval);
  }, [isRunning]);

  function handleStart() { setIsRunning(true);  }
  function handleStop()  { setIsRunning(false); }
  function handleReset() {
    setIsRunning(false);
    setSeconds(0);
  }

  // Format seconds into MM:SS
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs    = String(seconds % 60).padStart(2, "0");

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>⏱️ Timer</h3>

      <p style={styles.display}>
        {minutes}:{secs}
      </p>

      <div style={styles.btnRow}>
        <button
          onClick={handleStart}
          disabled={isRunning}
          style={{
            ...styles.btn,
            background: isRunning ? "#a5c8a5" : "#1a7f37",
            cursor: isRunning ? "not-allowed" : "pointer",
          }}
        >
          ▶ Start
        </button>
        <button
          onClick={handleStop}
          disabled={!isRunning}
          style={{
            ...styles.btn,
            background: !isRunning ? "#f5a8a8" : "#e53935",
            cursor: !isRunning ? "not-allowed" : "pointer",
          }}
        >
          ⏸ Stop
        </button>
        <button
          onClick={handleReset}
          style={{ ...styles.btn, background: "#757575", cursor: "pointer" }}
        >
          ↺ Reset
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
  display: {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#1a7f37",
    margin: "0 0 20px 0",
    letterSpacing: "0.05em",
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
  },
};