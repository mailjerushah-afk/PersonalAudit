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
      <div style={styles.container}>
        
        <div style={styles.header}>
          <h1 style={styles.title}>Dashboard</h1>

          <button
            style={styles.logoutButton}
            onClick={() => navigate("/")}
          >
            Logout
          </button>
        </div>

        <h2 style={styles.sectionTitle}>Registered Users</h2>

        {users.length === 0 && <p>No users yet.</p>}

        <div style={styles.userGrid}>
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
    //minHeight: "100vh",
    background: "linear-gradient(135deg, #e0f2ff, #b3e5fc)",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  } as React.CSSProperties,

 container: {
  width: "100%",
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "20px",
} as React.CSSProperties,

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  } as React.CSSProperties,

  title: {
    color: "#0277bd",
    margin: 0,
  } as React.CSSProperties,

  logoutButton: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "2px solid #0288d1",
    backgroundColor: "white",
    color: "#0288d1",
    fontWeight: 600,
    cursor: "pointer",
  } as React.CSSProperties,

  sectionTitle: {
    marginBottom: "100px",
    color: "#444",
  } as React.CSSProperties,

  userGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  } as React.CSSProperties,

  userCard: {
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#f5fbff",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    boxShadow: "0 5px 12px rgba(0,0,0,0.05)",
  } as React.CSSProperties,
};