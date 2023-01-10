
import React, { useState } from 'react';
import Card from "../UI/Card";
import '../Expenses/Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const changeYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }; 

  const filteredbyYear = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
    <Card className="expenses">
    <ExpensesFilter 
      selected={filteredYear} 
      onChangeYear={changeYearHandler}
     />
     <ExpensesChart expenses={filteredbyYear} />
     <ExpensesList items={filteredbyYear}/>
    </Card>
    </li>
  )
}  

export default Expenses;
