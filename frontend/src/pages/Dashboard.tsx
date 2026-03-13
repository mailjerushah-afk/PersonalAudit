
// import { useEffect, useState } from "react";
// import api from "../api/api";
// import type { User } from "../types/User";
// import { useNavigate } from "react-router-dom";
// import { styles } from "../styles/GlobalStyles";

// type Transaction = {
//   id: number;
//   amount: number;
//   description: string;
//   timestamp: string;
// };

// export default function Dashboard() {

//   const [users, setUsers] = useState<User[]>([]);
//   const [transactions, setTransactions] = useState<Transaction[]>([]);
//   const navigate = useNavigate();

//   const loadData = () => {
//     api.get<User[]>("/users")
//       .then(res => setUsers(res.data))
//       .catch(err => console.error(err));

//     api.get<Transaction[]>("/transactions")
//       .then(res => setTransactions(res.data))
//       .catch(err => console.error(err));
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   // Ledger calculations
//   const totalBalance = transactions.reduce((sum, tx) => sum + tx.amount, 0);

//   const totalCredits = transactions
//     .filter(tx => tx.amount > 0)
//     .reduce((sum, tx) => sum + tx.amount, 0);

//   const totalDebits = transactions
//     .filter(tx => tx.amount < 0)
//     .reduce((sum, tx) => sum + tx.amount, 0);

//   return (
//     <div style={styles.page}>
//       <div style={styles.container}>

//         {/* HEADER */}
//         <div style={styles.header}>
//           <h1 style={styles.title}>Digital Ledger Dashboard</h1>

//           <button
//             style={styles.logoutButton}
//             onClick={logout}
//           >
//             Logout
//           </button>
//         </div>


//         {/* LEDGER SUMMARY */}
//         <h2 style={styles.sectionTitle}>Account Summary</h2>

//         <div style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//             gap: "20px",
//             marginBottom: "30px"
//         }}>

//           <div style={styles.card}>
//             <h3>Balance</h3>
//             <p style={{fontSize:"22px", fontWeight:"bold"}}>
//               ${totalBalance.toFixed(2)}
//             </p>
//           </div>

//           <div style={styles.card}>
//             <h3>Total Credits</h3>
//             <p style={{color:"green", fontWeight:"bold"}}>
//               +${totalCredits.toFixed(2)}
//             </p>
//           </div>

//           <div style={styles.card}>
//             <h3>Total Debits</h3>
//             <p style={{color:"red", fontWeight:"bold"}}>
//               ${totalDebits.toFixed(2)}
//             </p>
//           </div>

//         </div>


//         {/* TRANSACTION LEDGER */}
//         <h2 style={styles.sectionTitle}>Transaction Ledger</h2>

//         {transactions.length === 0 && <p>No transactions yet.</p>}

//         {transactions.length > 0 && (
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Description</th>
//                 <th>Amount</th>
//                 <th>Timestamp</th>
//               </tr>
//             </thead>

//             <tbody>
//               {transactions.map(tx => (
//                 <tr key={tx.id}>
//                   <td>{tx.id}</td>
//                   <td>{tx.description}</td>

//                   <td style={{
//                     color: tx.amount > 0 ? "green" : "red",
//                     fontWeight: "bold"
//                   }}>
//                     {tx.amount > 0 ? "+" : ""}${tx.amount}
//                   </td>

//                   <td>
//                     {new Date(tx.timestamp).toLocaleString()}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}


//         {/* USERS */}
//         <h2 style={styles.sectionTitle}>Registered Users</h2>

//         {users.length === 0 && <p>No users yet.</p>}

//         <div style={styles.userGrid}>
//           {users.map(user => (
//             <div key={user.id} style={styles.userCard}>
//               <strong>{user.fullName}</strong>
//               <span>{user.email}</span>
//             </div>
//           ))}
//         </div>


//         {/* REFRESH BUTTON */}
//         <div style={{marginTop:"30px"}}>
//           <button style={styles.button} onClick={loadData}>
//             Refresh Data
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import api from "../api/api";
import type { User } from "../types/User";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/GlobalStyles";

type Transaction = {
  id: number;
  amount: number;
  description: string;
  timestamp: string;
  category?: string;
};

type BudgetStatus = {
  category: string;
  limit: number;
  spent: number;
  percentage: number;
};

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [budgets, setBudgets] = useState<BudgetStatus[]>([]);
  const navigate = useNavigate();

  const userId = 1; // Example user ID, replace with logged-in user if auth added

  const loadData = () => {
    api.get<User[]>("/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));

    api.get<Transaction[]>(`/transactions/${userId}`)
      .then(res => setTransactions(res.data))
      .catch(err => console.error(err));

    api.get<BudgetStatus[]>(`/budgets/${userId}/status`)
      .then(res => setBudgets(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // Ledger calculations
  const totalBalance = transactions.reduce((sum, tx) => sum + tx.amount, 0);
  const totalCredits = transactions.filter(tx => tx.amount > 0).reduce((sum, tx) => sum + tx.amount, 0);
  const totalDebits = transactions.filter(tx => tx.amount < 0).reduce((sum, tx) => sum + tx.amount, 0);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* HEADER */}
        <div style={styles.header}>
          <h1 style={styles.title}>Digital Ledger Dashboard</h1>
          <button style={styles.logoutButton} onClick={logout}>Logout</button>
        </div>

        {/* LEDGER SUMMARY */}
        <h2 style={styles.sectionTitle}>Account Summary</h2>
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "30px"
        }}>
          <div style={styles.card}>
            <h3>Balance</h3>
            <p style={{fontSize:"22px", fontWeight:"bold"}}>${totalBalance.toFixed(2)}</p>
          </div>

          <div style={styles.card}>
            <h3>Total Credits</h3>
            <p style={{color:"green", fontWeight:"bold"}}>+${totalCredits.toFixed(2)}</p>
          </div>

          <div style={styles.card}>
            <h3>Total Debits</h3>
            <p style={{color:"red", fontWeight:"bold"}}>${totalDebits.toFixed(2)}</p>
          </div>
        </div>

        {/* TRANSACTION LEDGER */}
        <h2 style={styles.sectionTitle}>Transaction Ledger</h2>
        {transactions.length === 0 && <p>No transactions yet.</p>}
        {transactions.length > 0 && (
          <table style={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(tx => (
                <tr key={tx.id}>
                  <td>{tx.id}</td>
                  <td>{tx.category || "-"}</td>
                  <td>{tx.description}</td>
                  <td style={{ color: tx.amount > 0 ? "green" : "red", fontWeight:"bold" }}>
                    {tx.amount > 0 ? "+" : ""}${tx.amount}
                  </td>
                  <td>{new Date(tx.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* BUDGET STATUS */}
        <h2 style={styles.sectionTitle}>Budget Status</h2>
        {budgets.length === 0 && <p>No budgets defined yet.</p>}
        {budgets.length > 0 && (
          <div>
            {budgets.map(b => {
              let barColor = "green";
              if (b.percentage >= 100) barColor = "red";
              else if (b.percentage >= 80) barColor = "orange";

              return (
                <div key={b.category} style={{ marginBottom: "15px" }}>
                  <strong>{b.category}</strong>
                  <p>${b.spent.toFixed(2)} / ${b.limit.toFixed(2)}</p>
                  <div style={{
                    height: "20px",
                    width: "100%",
                    backgroundColor: "#ddd",
                    borderRadius: "5px",
                    overflow: "hidden"
                  }}>
                    <div style={{
                      width: `${Math.min(b.percentage, 100)}%`,
                      backgroundColor: barColor,
                      height: "100%"
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* USERS */}
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

        {/* REFRESH BUTTON */}
        <div style={{marginTop:"30px"}}>
          <button style={styles.button} onClick={loadData}>Refresh Data</button>
        </div>
      </div>
    </div>
  );
}