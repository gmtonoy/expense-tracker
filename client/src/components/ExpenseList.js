import React from "react";

export default function ExpenseList({ expenses, onDelete }) {
  return (
    <ul>
      {expenses.map((exp) => (
        <li key={exp.id}>
          {new Date(exp.date).toLocaleDateString()} – {exp.description} – $
          {exp.amount.toFixed(2)}
          <button onClick={() => onDelete(exp.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
