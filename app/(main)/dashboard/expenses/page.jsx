// expenses page
"use client";

import React from 'react'
import ExpenseTable from './_components/expense-table';

const ExpensesPage = () => {
  return (
    <div className='p-10'>
      <h2 className="font-bold text-3xl">Expenses</h2>
      {/* Expense Table */}
      <ExpenseTable />
      </div>
  )
}

export default ExpensesPage