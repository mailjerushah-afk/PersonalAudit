import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>

      <button onClick={() => navigate("/dashboard")}>
        Enter Dashboard
      </button>

      <p>
        Don’t have an account?{" "}
        <button onClick={() => navigate("/register")}>
          Register
        </button>
      </p>
    </div>
  );
}