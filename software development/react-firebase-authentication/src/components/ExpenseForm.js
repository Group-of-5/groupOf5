import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ amount, description, type });
    setAmount(0);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Expense</h3>
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="type">Type:</label>
      <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;
