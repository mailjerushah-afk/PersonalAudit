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

  // NEW: form state
  const [asset, setAsset] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const [value, setValue] = useState<number>(0);

  const userId = 1;

 

  const fetchPortfolio = () => {
    api.get(`/portfolio/${userId}`)
      .then(res => setPortfolio(res.data))
      .catch(err => console.error(err));
  };
   useEffect(() => {
    fetchPortfolio();
  }, []);

  // NEW: Add asset function
  const handleAddAsset = () => {
    if (!asset || quantity <= 0 || value <= 0) {
      alert("Please fill all fields correctly");
      return;
    }

    const newAsset = {
      asset,
      quantity,
      value
    };

    api.post(`/portfolio/${userId}`, newAsset)
      .then(() => {
        fetchPortfolio(); // refresh data
        setAsset("");
        setQuantity(0);
        setValue(0);
      })
      .catch(err => console.error(err));
  };

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

        {/* NEW: Add Asset Form */}
        <div style={styles.dashboardCard}>
          <h2 style={styles.sectionTitle}>Add Asset</h2>

          <div style={styles.flexRow}>
            <input
              type="text"
              placeholder="Asset (e.g. AAPL)"
              value={asset}
              onChange={(e) => setAsset(e.target.value)}
            />

            <input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />

            <input
              type="number"
              placeholder="Value ($)"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
            />

            <button
              style={styles.primaryButton}
              onClick={handleAddAsset}
            >
              ➕ Add
            </button>
          </div>
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