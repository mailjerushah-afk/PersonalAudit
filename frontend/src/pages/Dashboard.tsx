import { useEffect, useState } from "react";
import api from "../api/api";
import type { User } from "../types/User";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get<User[]>("/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.cardLarge}>
        <h1 style={styles.title}>Dashboard</h1>

        <button
          style={styles.secondaryButton}
          onClick={() => navigate("/")}
        >
          Logout
        </button>

        <h2 style={styles.sectionTitle}>Registered Users</h2>

        {users.length === 0 && <p>No users yet.</p>}

        <div style={styles.userList}>
          {users.map(user => (
            <div key={user.id} style={styles.userCard}>
              <strong>{user.fullName}</strong>
              <span>{user.email}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    background: "linear-gradient(135deg, #e0f2ff, #b3e5fc)",
    fontFamily: "Arial, sans-serif",
  } as React.CSSProperties,

  card: {
    backgroundColor: "white",
    padding: "clamp(30px, 5vw, 60px)",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
    width: "100%",
    maxWidth: "420px",
    textAlign: "center",
  } as React.CSSProperties,

  cardLarge: {
    backgroundColor: "white",
    padding: "clamp(30px, 5vw, 60px)",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
    width: "100%",
    maxWidth: "700px",
  } as React.CSSProperties,

  title: {
    color: "#0277bd",
    marginBottom: "20px",
  } as React.CSSProperties,

  sectionTitle: {
    marginTop: "30px",
    marginBottom: "20px",
    color: "#444",
  } as React.CSSProperties,

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "16px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
  } as React.CSSProperties,

  primaryButton: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#0288d1",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
    marginBottom: "20px",
  } as React.CSSProperties,

  secondaryButton: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "2px solid #0288d1",
    backgroundColor: "white",
    color: "#0288d1",
    fontWeight: 600,
    cursor: "pointer",
    marginBottom: "10px",
  } as React.CSSProperties,

  userList: {
    marginTop: "20px",
  } as React.CSSProperties,

  userCard: {
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#f5fbff",
    marginBottom: "12px",
    display: "flex",
    justifyContent: "space-between",
  } as React.CSSProperties,
};