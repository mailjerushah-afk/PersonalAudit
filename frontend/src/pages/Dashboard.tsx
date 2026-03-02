// import { useEffect, useState } from "react";
// import api from "../api/api";
// import { User } from "../types/User";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {

//   const [users, setUsers] = useState<User[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     api.get<User[]>("/users")
//       .then(res => setUsers(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h1>Dashboard</h1>

//       <button onClick={() => navigate("/")}>
//         Back to Login
//       </button>

//       <h2>Registered Users</h2>

//       {users.length === 0 && <p>No users yet.</p>}

//       {users.map(user => (
//         <div key={user.id}>
//           {user.fullName} ({user.email})
//         </div>
//       ))}
//     </div>
//   );
// }