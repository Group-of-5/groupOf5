// Balance.js

import React from "react";

function Balance({ income, expenses }) {
  const balance = income - expenses.reduce((total, expense) => total + expense.amount, 0);
  return (
    <div className="balance">
      <h3>Current Balance</h3>
      <h2>{balance}</h2>
    </div>
  );
}

export default Balance;
