import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = () => {
  const saveExpenseDataHandler =(enteredExpenseData) => {
    const expanseData ={
      ...enteredExpenseData,
      id:Math.random().toString()
    };
    console.log(expanseData);
  }

  return (
    <>
      <div className="new-expense">
       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
      </div>
    </>
  );
};

export default NewExpense;
