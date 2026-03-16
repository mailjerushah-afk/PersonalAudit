import { useState } from "react";
import api from "../api/api";
import { styles } from "../styles/GlobalStyles";
import type { Budget } from "../types/Finance";

type Props = {
  reload: () => void;
};

export default function BudgetForm({ reload }: Props) {

  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState("");

  const createBudget = () => {

    if (!category || !limit) return;

    const newBudget: Budget = {
      userId: 1,
      category: category,
      monthlyLimit: Number(limit)
    };

    api.post("/budgets", newBudget)
      .then(() => {
        setCategory("");
        setLimit("");
        reload();
      });

  };

  return (
    <div>

      <h2 style={styles.sectionTitle}>Create Budget</h2>

      <div style={styles.flexRow}>

        <input
          style={styles.input}
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          style={styles.input}
          type="number"
          placeholder="Limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />

        <button style={styles.button} onClick={createBudget}>
          Create
        </button>

      </div>

    </div>
  );
}