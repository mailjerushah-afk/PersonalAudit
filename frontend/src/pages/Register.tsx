import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { User } from "../types/User";

export default function Register() {

  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: User = {
      email,
      fullName
    };

    try {
      await api.post("/users", newUser);
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h1>Register</h1>

      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Create Account</button>
    </form>
  );
}