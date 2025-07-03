import React, { useState } from "react";

export default function AddExpense({ onAdd }) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAdd({ description: desc, amount, date });
    setDesc("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
