import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await axios.get("http://localhost:4000/api/expenses");
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async (exp) => {
    await axios.post("http://localhost:4000/api/expenses", exp);
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:4000/api/expenses/${id}`);
    fetchExpenses();
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>Expense Tracker</h1>
      <AddExpense onAdd={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;
