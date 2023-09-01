import ExpenseData from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react';

const DUMMY_EXPENSES = [
  { title: 'Car Insurence', amount: 2342.34, date: new Date(2023, 4, 28) },
  { title: 'Toilet Paper', amount: 342.43, date: new Date(2023, 4, 28) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseData items={expenses} />
    </div>
  );
};

export default App;
