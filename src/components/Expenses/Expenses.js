// Expenses.js
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] =useState('2019');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <>
      <div>
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
          {props.items.map((item) => (
            // Use curly braces for comments inside JSX
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))}
        </Card>
      </div>
    </>
  );
};

export default Expenses;
