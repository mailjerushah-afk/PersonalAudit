import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { styles } from "../styles/GlobalStyles";

type PortfolioItem = {
  asset: string;
  quantity: number;
  value: number;
};

export default function Portfolio() {
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);

  const userId = 1;

  useEffect(() => {
    api.get(`/portfolio/${userId}`)
      .then(res => setPortfolio(res.data))
      .catch(err => console.error(err));
  }, []);

  const totalValue = portfolio.reduce((sum, item) => sum + item.value, 0);

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>📊 Portfolio</h1>

          <div style={styles.flexRow}>
            <button
              style={styles.secondaryButton}
              onClick={() => navigate("/dashboard")}
            >
              ⬅ Back
            </button>
          </div>
        </div>

        {/* Summary */}
        <div style={styles.dashboardCard}>
          <h2>Total Value: ${totalValue.toFixed(2)}</h2>
        </div>

        {/* Portfolio Table */}
        <div style={styles.dashboardCard}>
          <h2 style={styles.sectionTitle}>Assets</h2>

          <table style={styles.table}>
            <thead>
              <tr>
                <th>Asset</th>
                <th>Quantity</th>
                <th>Value ($)</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map((item, index) => (
                <tr key={index}>
                  <td>{item.asset}</td>
                  <td>{item.quantity}</td>
                  <td>{item.value.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}