import { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/GlobalStyles";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function BillCalendar() {

  const navigate = useNavigate();

  const [date, setDate] = useState<Value>(new Date());

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.title}>Bill Calendar</h1>

        <button
          style={styles.button}
          onClick={() => navigate("/dashboard")}
        >
          Back
        </button>

        <Calendar
          value={date}
          onChange={(value: Value) => setDate(value)}
        />

      </div>
    </div>
  );
}