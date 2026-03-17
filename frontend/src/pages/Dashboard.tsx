// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../api/api";
// import { styles } from "../styles/GlobalStyles";

// import AccountSummary from "../components/AccountSummary";
// import TransactionTable from "../components/TransactionTable";
// import BudgetForm from "../components/BudgetForm";
// import BudgetStatus from "../components/BudgetStatus";
// import UserList from "../components/UserList";
// import type { Transaction, BudgetStatus as BudgetStatusType} from "../types/Finance";
// import type { User } from "../types/User";

// // type Transaction = {
// //   id:number
// //   amount:number
// //   description:string
// //   timestamp:string
// //   category?:string
// // }

// // type BudgetStatus = {
// //   category:string
// //   limit:number
// //   spent:number
// //   percentage:number
// // }

// export default function Dashboard(){

//   const navigate = useNavigate()

//   const [users,setUsers] = useState<User[]>([])
//   const [transactions,setTransactions] = useState<Transaction[]>([])
//   const [budgets,setBudgets] = useState<BudgetStatusType[]>([])

//   const userId = 1

//   const loadData = () => {

//     api.get("/users")
//       .then(res => setUsers(res.data))

//     api.get(`/transactions/${userId}`)
//       .then(res => setTransactions(res.data))

//     api.get(`/budgets/${userId}/status`)
//       .then(res => setBudgets(res.data))
//   }

//   useEffect(()=>{
//     loadData()
//   },[])

//   const logout = () => {
//     localStorage.removeItem("token")
//     navigate("/")
//   }

//   return(

//     <div style={styles.page}>

//       <div style={styles.container}>

//         <div style={styles.header}>

//           <h1 style={styles.title}>
//             Digital Ledger Dashboard
//           </h1>

//           <div>

//             <button
//               style={styles.button}
//               onClick={()=>navigate("/calendar")}
//             >
//               Bills Calendar
//             </button>

//             <button
//               style={styles.logoutButton}
//               onClick={logout}
//             >
//               Logout
//             </button>

//           </div>

//         </div>

//         <AccountSummary transactions={transactions} />

//         <TransactionTable transactions={transactions} />

//         <BudgetForm reload={loadData} />

//         <BudgetStatus budgets={budgets} />

//         <UserList users={users} />

//       </div>

//     </div>

//   )
// }
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { styles } from "../styles/GlobalStyles";

import AccountSummary from "../components/AccountSummary";
import TransactionTable from "../components/TransactionTable";
import BudgetForm from "../components/BudgetForm";
import BudgetStatus from "../components/BudgetStatus";
import UserList from "../components/UserList";
import type { Transaction, BudgetStatus as BudgetStatusType } from "../types/Finance";
import type { User } from "../types/User";

export default function Dashboard() {
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [budgets, setBudgets] = useState<BudgetStatusType[]>([]);

  const userId = 1;

  const loadData = () => {
    api.get("/users").then(res => setUsers(res.data));
    api.get(`/transactions/${userId}`).then(res => setTransactions(res.data));
    api.get(`/budgets/${userId}/status`).then(res => setBudgets(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>💳 Digital Ledger</h1>

          <div style={styles.flexRow}>
            <button
              style={styles.secondaryButton}
              onClick={() => navigate("/calendar")}
            >
              📅 Bills
            </button>

            <button
              style={styles.logoutButton}
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Top Summary */}
        <div style={styles.grid}>
          <AccountSummary transactions={transactions} />
        </div>

        {/* Middle Section */}
        <div style={styles.dashboardGrid}>

          {/* Transactions */}
          <div style={styles.dashboardCard}>
            <h2 style={styles.sectionTitle}>Recent Transactions</h2>
            <TransactionTable transactions={transactions} />
          </div>

          {/* Budgets */}
          <div style={styles.dashboardCard}>
            <h2 style={styles.sectionTitle}>Budget Overview</h2>
            <BudgetStatus budgets={budgets} />
          </div>

        </div>

        {/* Bottom Section */}
        <div style={styles.dashboardGrid}>

          <div style={styles.dashboardCard}>
            <h2 style={styles.sectionTitle}>Create Budget</h2>
            <BudgetForm reload={loadData} />
          </div>

          <div style={styles.dashboardCard}>
            <h2 style={styles.sectionTitle}>Users</h2>
            <UserList users={users} />
          </div>

        </div>

      </div>
    </div>
  );
}