import { useState, useEffect } from "react";
function Transactionside({ onTotalsChange }) {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Income");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    if (onTotalsChange) {
      onTotalsChange({
        income: totIncome,
        expenses: totExpenses,
        savings: totSavings,
        balance,
      });
    }
  }, [transactions]);
  const totIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    }, 0);
  const totExpenses = transactions
    .filter((t) => t.type === "Expenses")
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    }, 0);
  const totSavings = transactions
    .filter((t) => t.type === "Savings")
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amount;
    }, 0);
  const balance = totIncome - totSavings - totExpenses;
  // useEffect(() => {
  //   const saved = localStorage.getItem("transactions");
  //   if (saved) {
  //     setTransactions(JSON.parse(saved));
  //   }
  // }, []);

  // add-btn
  function handleAdd() {
    if (description === "" || amount === "") {
      alert("⚠️ Please enter a valid description and a positive amount!");
      return;
    }
    const newTransaction = {
      id: Date.now(),
      type: type,
      description: description,
      amount: parseFloat(amount),
    };

    setTransactions([...transactions, newTransaction]);
    setDescription("");
    setAmount("");
  }

  // delete-btn
  function del(id) {
    const update = transactions.filter((t) => t.id !== id);
    setTransactions(update);
  }

  return (
    <>
      <div className="Inputele">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Income"> Income</option>
          <option value="Expenses"> Expenses</option>
          <option value="Savings"> Savings</option>
        </select>

        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Amount"
        />

        <button className="Add-btn" onClick={handleAdd}>
          Add
        </button>
      </div>
      <table className="Table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.type}</td>
              <td>{t.description}</td>
              <td>₹{t.amount}</td>
              <td>
                <button onClick={() => del(t.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Transactionside;
