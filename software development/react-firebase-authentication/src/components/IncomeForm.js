// IncomeForm.js

import React, { useState } from "react";

function IncomeForm({ addIncome }) {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(amount);
    setAmount(0);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Income</h3>
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
      <button type="submit">Add</button>
    </form>
  );
}

export default IncomeForm;
