import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/GlobalStyles";
import BillForm from "../components/BillForm";
import { getBills, saveBills } from "../services/billService";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Bill = {
  id: number;
  userId: number;
  name: string;
  amount: number;
  dueDate: string;
};

export default function BillCalendar() {
  const navigate = useNavigate();
  const [date, setDate] = useState<Value>(new Date());
  const [bills, setBills] = useState<Bill[]>([]);

  // Load bills from storage
  useEffect(() => {
    setBills(getBills());
  }, []);

  // Save bills whenever updated
  useEffect(() => {
    saveBills(bills);
  }, [bills]);

  // Add bill
  const addBill = (bill: Omit<Bill, "id">) => {
    const newBill: Bill = {
      ...bill,
      id: Date.now()
    };
    setBills([...bills, newBill]);
  };

  // Delete bill
  const deleteBill = (id: number) => {
    setBills(bills.filter(b => b.id !== id));
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>📅 Bill Calendar</h1>

          <button
            style={{ ...styles.secondaryButton, width: "auto", padding: "8px 16px" }}
            onClick={() => navigate("/dashboard")}
          >
            Back
          </button>
        </div>

        {/* Layout */}
        <div style={styles.flexRow}>

          {/* Calendar */}
          <div style={styles.calendarCard}>
            <h2 style={styles.sectionTitle}>Select Date</h2>

            <Calendar
              value={date}
              onChange={(value: Value) => setDate(value)}

              tileContent={({ date }) => {
                const formatted = date.toISOString().split("T")[0];

                const hasBill = bills.some(
                  (b) => b.dueDate === formatted
                );

                return hasBill ? (
                  <div
                    style={{
                      marginTop: 2,
                      height: 6,
                      width: 6,
                      borderRadius: "50%",
                      background: "red",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                  />
                ) : null;
              }}
            />
          </div>

          {/* Alerts */}
          <div style={styles.alertCard}>
            <h2 style={styles.sectionTitle}>🔔 Alerts</h2>

            {/* Add Form */}
            <BillForm onAdd={addBill} />

            {/* List */}
            {bills.length === 0 ? (
              <p style={{ color: "#777" }}>No upcoming bills 🎉</p>
            ) : (
              bills.map((bill) => (
                <div key={bill.id} style={styles.alertItem}>
                  <div>
                    <strong>{bill.name}</strong>
                    <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>
                      Due: {bill.dueDate}
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={styles.amountTag}>${bill.amount}</div>

                    <button onClick={() => deleteBill(bill.id)}>
                      ❌
                    </button>
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