// App.js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

const App = () => {
  const expenses = [
    {
      id: "el",
      title: "Toilet Paper",
      amount: 100,
      date: new Date(2020, 1, 2),
    },
    {
      id: "e2",
      title: "TV",
      amount: 200,
      date: new Date(2021, 2, 3),
    },
    {
      id: "e3",
      title: "Music System",
      amount: 250,
      date: new Date(2022, 4, 5),
    },
    {
      id: "e4",
      title: "Laptop",
      amount: 300,
      date: new Date(2023, 6, 7),
    },
  ];

  // return (
  //   React.createElement(Expenses, { items: expenses })
  // );

  const addExpanseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpanseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
