import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/GlobalStyles";

type Bill = {
  name: string;
  amount: number;
  dueDate: string;
};

export default function BillCalendar() {

  const navigate = useNavigate();

  const [bills, setBills] = useState<Bill[]>([
    { name: "Rent", amount: 1200, dueDate: "2026-03-01" },
    { name: "Electricity", amount: 120, dueDate: "2026-03-10" },
    { name: "Internet", amount: 70, dueDate: "2026-03-18" }
  ]);

  const [date, setDate] = useState(new Date());

  const billsToday = bills.filter(
    b => new Date(b.dueDate).toDateString() === date.toDateString()
  );

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.title}>Monthly Bill Calendar</h1>

        <button
          style={{...styles.button, marginBottom:"20px"}}
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>

        <Calendar
          onChange={(value:any) => setDate(value)}
          value={date}
        />

        <h2 style={{marginTop:"20px"}}>Bills Due</h2>

        {billsToday.length === 0 && (
          <p>No bills due on this date.</p>
        )}

        {billsToday.map((bill, i) => (
          <div key={i} style={{
            border:"1px solid #ddd",
            padding:"12px",
            marginTop:"10px",
            borderRadius:"6px"
          }}>
            <strong>{bill.name}</strong>
            <p>${bill.amount}</p>
          </div>
        ))}

      </div>
    </div>
  );
}