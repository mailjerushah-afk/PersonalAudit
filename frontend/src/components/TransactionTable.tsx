import type { Transaction } from "../types/Finance";
import { styles } from "../styles/GlobalStyles";

type Props = {
  transactions: Transaction[];
};

export default function TransactionTable({ transactions }: Props) {

  return (
    <div>

      <h2 style={styles.sectionTitle}>Transactions</h2>

      {transactions.length === 0 && <p>No transactions yet</p>}

      {transactions.length > 0 && (

        <table style={styles.table}>

          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>

            {transactions.map(tx => (

              <tr key={tx.id}>

                <td>{tx.id}</td>

                <td>{tx.category || "-"}</td>

                <td>{tx.description}</td>

                <td style={{
                  color: tx.amount > 0 ? "green" : "red"
                }}>
                  {tx.amount > 0 ? "+" : ""}${tx.amount}
                </td>

                <td>
                  {new Date(tx.timestamp).toLocaleString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}