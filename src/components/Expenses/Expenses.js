// Expenses.js
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const Expenses = (props) => {
  return (
    <>
      <Card className='expenses'>
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
    </>
  );
}

export default Expenses;
