import { useState } from "react";
import ExpenseList from "./expense-tracker/ExpenseList";
import ExpenseFilter from "./expense-tracker/component/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Tell Bill", amount: 10, category: "Utilities" },
    { id: 2, description: "water Bill", amount: 10, category: "Utilities" },
    {
      id: 3,
      description: "electricity Bill",
      amount: 10,
      category: "Groceries",
    },
    { id: 4, description: "gas Bill", amount: 10, category: "Utilites" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div className="mb-3 mt-3">
        <ExpenseFilter onSelectCategory={(cate) => setSelectedCategory(cate)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
