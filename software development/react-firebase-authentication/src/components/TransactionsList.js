// TransactionsList.js

import React from "react";

function TransactionsList({ transactions }) {
  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.description} ({transaction.type}): {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionsList;
