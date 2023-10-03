import { useState } from "react";
import ExpenseList from "./expense-tracker/ExpenseList";
import ExpenseFilter from "./expense-tracker/component/ExpenseFilter";
import ExpenseForm from "./expense-tracker/component/ExpenseForm";
import categories from "./expense-tracker/Categories";

import style from "./index.css";

// //Define for reusable category list
// export const categorries = ["Groceries", "Utilities", "Entertainment"] as const;
// //At the end "as const" is use for set this categorries for read only

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  //Expenses array list
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

  //Checking of what is currently selected category
  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div className="mx-auto w-50 mt-10">
      <h1 className="mb-3 text-primary fw-bold ">Expense Tracker</h1>
      <div className="d-flex justify-content-between">
        <div className="mb-4">
          <ExpenseForm
            onSubmit={(expense) =>
              setExpenses([
                ...expenses,
                { ...expense, id: expenses.length + 1 },
              ])
            }
          />
        </div>

        <div>
          <div className="mb-3 mt-3">
            <ExpenseFilter
              onSelectCategory={(cate) => setSelectedCategory(cate)}
            />
          </div>

          <ExpenseList
            expenses={visibleExpenses}
            onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
