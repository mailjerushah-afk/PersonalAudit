import type { BudgetStatus } from "../types/Finance";
import { styles } from "../styles/GlobalStyles";

type Props = {
  budgets: BudgetStatus[];
};

export default function BudgetStatus({ budgets }: Props) {

  return (
    <div>

      <h2 style={styles.sectionTitle}>Budget Status</h2>

      {budgets.length === 0 && <p>No budgets yet</p>}

      {budgets.map(b => {

        let color = "green";

        if (b.percentage >= 100) color = "red";
        else if (b.percentage >= 80) color = "orange";

        return (

          <div key={b.category} style={styles.budgetCard}>

            <strong>{b.category}</strong>

            <p>
              ${b.spent} / ${b.limit}
            </p>

            <div style={styles.progressBar}>

              <div
                style={{
                  width: `${Math.min(b.percentage, 100)}%`,
                  background: color,
                  height: "100%"
                }}
              />

            </div>

          </div>

        );

      })}

    </div>
  );
}