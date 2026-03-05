// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function Login() {
//   return <h1>Login</h1>;
// }
// import { useEffect } from "react";
// import api from "./api/api";
// function Dashboard() {

//   useEffect(() => {
//     api.get("/users")
//       .then(res => console.log(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return <h1>Dashboard</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

/* ---------------- LOGIN ---------------- */

// function Login() {
//   return (
//     <div>
//       <h1>Login (Security Disabled)</h1>
//       <p>JWT is currently disabled in backend.</p>

//       <Link to="/dashboard">
//         <button>Go to Dashboard</button>
//       </Link>

//       <p>Don't have an account?</p>
//       <Link to="/register">
//         <button>Register account</button>
//       </Link>
//     </div>
//   );
// }

/* ---------------- DASHBOARD ---------------- */

// function Dashboard() {

//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     api.get("/users")
//       .then(res => {
//         console.log(res.data);
//         setUsers(res.data);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h1>Dashboard</h1>

//       {users.length === 0 && <p>No users yet.</p>}

//       {users.map((user, index) => (
//         <div key={index}>
//           {user.fullName} ({user.email})
//         </div>
//       ))}
//     </div>
//   );
// }

/* ---------------- APP ---------------- */

function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/register" element={<Register />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;