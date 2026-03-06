import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import type { UserRequest } from "../types/UserRequest";
import { styles } from "../styles/GlobalStyles";

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
