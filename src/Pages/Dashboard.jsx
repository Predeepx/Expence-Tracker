import Card from "../components/Cards/card.jsx";
import Transactionside from "../components/Transactions/Transactionside.jsx";
import { useState } from "react";
import "../components/Transactions/Transactionside.css";
function Dashboard() {
  const [totals, setTotals] = useState({
    income: 0,
    expenses: 0,
    savings: 0,
    balance: 0,
  });
  return (
    <div>
      <Card
        income={totals.income}
        expenses={totals.expenses}
        savings={totals.savings}
        balance={totals.balance}
      />
      <Transactionside onTotalsChange={setTotals} />
    </div>
  );
}

export default Dashboard;
