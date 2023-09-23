import { useState } from "react";
import ExpenseList from "./expense-tracker/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Tell Bill", amount: 10, category: "Utilites" },
    { id: 2, description: "water Bill", amount: 10, category: "Utilites" },
    {
      id: 3,
      description: "electricity Bill",
      amount: 10,
      category: "Utilites",
    },
    { id: 4, description: "gas Bill", amount: 10, category: "Utilites" },
  ]);
  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
