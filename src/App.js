import React, { useState } from 'react'

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Card from './components/UI/Card';

  const Dummy_Expenses = [ 
    {
      id: 'e1',
      title: 'Breakfast',
      amount: '40',
      date: new Date(2022, 12, 2),
    },
    {
      id: 'e2',
      title: 'Taxi',
      amount: '20',
      date: new Date(2021, 12, 4),
    },
    {
      id: 'e3',
      title: 'Mobile EC',
      amount: '10',
      date: new Date(2020, 12, 5),
    },
    {
      id: 'e4',
      title: 'Evening Snacks',
      amount: '5',
      date: new Date(2020, 12, 6),
    },
  ];

  const App = () => {

  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
     setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
     });
  };

  return (
    <div style={{background: 'grey'}}>
      <Card><h2 style={{textAlign: 'center', padding: '10px', color:'#fff'}}>Expense Manager</h2></Card>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;
