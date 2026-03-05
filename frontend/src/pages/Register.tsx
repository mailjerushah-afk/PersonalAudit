import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import type { UserRequest } from "../types/UserRequest";

export default function Register() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: UserRequest = { email, fullName };

    try {
      await api.post("/users", newUser);
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Create Account</h1>

        <form onSubmit={handleRegister} style={{ width: "100%" }}>
          <input
            style={styles.input}
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            style={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button style={styles.primaryButton} type="submit">
            Register
          </button>
        </form>

        <button
          style={styles.secondaryButton}
          onClick={() => navigate("/")}
        >
          Back to Login
        </button>
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