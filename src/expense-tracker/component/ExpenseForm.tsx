import React from "react";
import { categorries } from "../../App";

const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>

      <div className="md-3">
        {/* .md-3>label.form-label+select.form-select */}

        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select">
          {categorries.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary mt-3"> Submit</button>
    </form>
  );
};

export default ExpenseForm;
