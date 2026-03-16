import { Transaction } from "../types/Finance";
import { styles } from "../styles/GlobalStyles";

type Props = {
  transactions: Transaction[];
};

export default function AccountSummary({ transactions }: Props) {

  const balance = transactions.reduce(
    (sum, tx) => sum + tx.amount, 0
  );

  const credits = transactions
    .filter(t => t.amount > 0)
    .reduce((s, t) => s + t.amount, 0);

  const debits = transactions
    .filter(t => t.amount < 0)
    .reduce((s, t) => s + t.amount, 0);

  return (
    <div>

      <h2 style={styles.sectionTitle}>Account Summary</h2>

      <div style={styles.grid}>

        <div style={styles.card}>
          <h3>Balance</h3>
          <p>${balance.toFixed(2)}</p>
        </div>

        <div style={styles.card}>
          <h3>Total Credits</h3>
          <p style={{ color: "green" }}>
            +${credits.toFixed(2)}
          </p>
        </div>

        <div style={styles.card}>
          <h3>Total Debits</h3>
          <p style={{ color: "red" }}>
            ${debits.toFixed(2)}
          </p>
        </div>

      </div>

    </div>
  );
}