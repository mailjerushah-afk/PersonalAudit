// import { useNavigate } from "react-router-dom";

// export default function Login() {

//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Login</h1>

//       <button onClick={() => navigate("/dashboard")}>
//         Enter Dashboard
//       </button>

//       <p>
//         Don’t have an account?{" "}
//         <button onClick={() => navigate("/register")}>
//           Register
//         </button>
//       </p>
//     </div>
//   );
// }
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/GlobalStyles";
export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>Sign in to access your dashboard</p>

        <button
          style={styles.primaryButton}
          onClick={() => navigate("/dashboard")}
        >
          Enter Dashboard
        </button>

        <div style={styles.divider} />

        <p style={styles.footerText}>
          Don’t have an account?
        </p>

        <button
          style={styles.secondaryButton}
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
