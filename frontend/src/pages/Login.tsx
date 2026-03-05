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

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
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
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.08)",
    width: "100%",
    maxWidth: "480px",
    textAlign: "center",
  } as React.CSSProperties,

  title: {
    marginBottom: "12px",
    color: "#0277bd",
    fontSize: "clamp(24px, 3vw, 32px)",
  } as React.CSSProperties,

  subtitle: {
    marginBottom: "32px",
    color: "#555",
    fontSize: "clamp(14px, 2vw, 16px)",
  } as React.CSSProperties,

  primaryButton: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#0288d1",
    color: "white",
    fontWeight: 600,
    fontSize: "16px",
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
    fontSize: "15px",
    cursor: "pointer",
  } as React.CSSProperties,

  footerText: {
    marginBottom: "12px",
    fontSize: "14px",
    color: "#666",
  } as React.CSSProperties,

  divider: {
    height: "1px",
    backgroundColor: "#e0e0e0",
    margin: "24px 0",
  } as React.CSSProperties,
};