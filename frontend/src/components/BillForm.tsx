import { useState } from "react";
import type { Bill } from "../pages/BillCalendar";

type Props = {
  onAdd: (bill: Omit<Bill, "id">) => void;
};

export default function BillForm({ onAdd }: Props) {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    dueDate: ""
  });

  const handleSubmit = () => {
    if (!form.name || !form.amount || !form.dueDate) return;

    onAdd({
      userId: 1,
      name: form.name,
      amount: Number(form.amount),
      dueDate: form.dueDate
    });

    setForm({ name: "", amount: "", dueDate: "" });
  };

  return (
    <div style={{ marginBottom: 16, display: "flex", flexDirection: "column", gap: 8 }}>
      <input
        placeholder="Bill name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <input
        type="date"
        value={form.dueDate}
        onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
      />

      <button onClick={handleSubmit}>
        Add Alert
      </button>
    </div>
  );
}