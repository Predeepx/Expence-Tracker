import "./Some.css";

function Card({ income, expenses, savings, balance }) {
  return (
    <div className="card-container">
      <div className="card">
        <h1 style={{ color: "#10B981" }}>Income</h1>
        <p>₹{income.toLocaleString("en-IN")}</p>
      </div>
      <div className="card">
        <h1 style={{ color: "#EF4444" }}>Expense</h1>
        <p>₹{expenses.toLocaleString("en-IN")}</p>
      </div>
      <div className="card">
        <h1 style={{ color: "#6366F1" }}> Balance</h1>
        <p>₹{balance.toLocaleString("en-IN")}</p>
      </div>
      <div className="card">
        <h1 style={{ color: "#F59E0B" }}>Savings</h1>
        <p>₹{savings.toLocaleString("en-IN")}</p>
      </div>
    </div>
  );
}

export default Card;
