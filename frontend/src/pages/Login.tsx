// import { useNavigate } from "react-router-dom";
// import { styles } from "../styles/GlobalStyles";
// export default function Login() {
//   const navigate = useNavigate();

//   return (
//     <div style={styles.page}>
//       <div style={styles.card}>
//         <h1 style={styles.title}>Welcome Back</h1>
//         <p style={styles.subtitle}>Sign in to access your dashboard</p>

//         <button
//           style={styles.primaryButton}
//           onClick={() => navigate("/dashboard")}
//         >
//           Enter Dashboard
//         </button>

//         <div style={styles.divider} />

//         <p style={styles.footerText}>
//           Don’t have an account?
//         </p>

//         <button
//           style={styles.secondaryButton}
//           onClick={() => navigate("/register")}
//         >
//           Create Account
//         </button>
//       </div>
//     </div>
//   );
// }
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/GlobalStyles";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={styles.layout}>

      {/* LEFT PANEL */}
      <div style={styles.leftPanel}>
        <h1>Digital Ledger</h1>
        <p>Track transactions and manage finances securely.</p>
      </div>

      {/* RIGHT PANEL */}
      <div style={styles.rightPanel}>
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

    </div>
  );
}