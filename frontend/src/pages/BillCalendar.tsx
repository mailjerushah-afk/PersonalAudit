import { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/GlobalStyles";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type Bill = {
  id?: number;
  userId: number;
  name: string;
  amount: number;
  dueDate: string;
};

export default function BillCalendar() {
  const navigate = useNavigate();
  const [date, setDate] = useState<Value>(new Date());

  // 🔔 Dummy upcoming alerts (replace with API later)
  const upcomingBills: Bill[] = [
    { userId: 1, name: "Netflix", amount: 15, dueDate: "2026-03-20" },
    { userId: 1, name: "Rent", amount: 450, dueDate: "2026-03-25" },
    { userId: 1, name: "Spotify", amount: 12, dueDate: "2026-03-28" },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>📅 Bill Calendar</h1>
          <button
            style={styles.secondaryButton}
            onClick={() => navigate("/dashboard")}
          >
            Back
          </button>
        </div>

        {/* Main Layout */}
        <div style={styles.flexRow}>

          {/* Calendar Section */}
          <div style={styles.calendarCard}>
            <h2 style={styles.sectionTitle}>Select Date</h2>

            <Calendar
              value={date}
              onChange={(value: Value) => setDate(value)}
            />
          </div>

          {/* Alerts Section */}
          <div style={styles.alertCard}>
            <h2 style={styles.sectionTitle}>🔔 Upcoming Alerts</h2>

            {upcomingBills.length === 0 ? (
              <p style={{ color: "#777" }}>No upcoming bills 🎉</p>
            ) : (
              upcomingBills.map((bill, index) => (
                <div key={index} style={styles.alertItem}>
                  <div>
                    <strong>{bill.name}</strong>
                    <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>
                      Due: {bill.dueDate}
                    </p>
                  </div>

                  <div style={styles.amountTag}>
                    ${bill.amount}
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}