import { Injectable } from '@angular/core';
import { Expense } from './expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {

  expenses:any=[{expenseReason: "food", expenseAmount: "123", expenseDate: "2021-02-12T19:59:18.101+05:30"},
        {expenseReason: "food1", expenseAmount: "123", expenseDate: "2021-02-12T19:59:18.101+05:30"}]

  constructor() { }


  addExpense(expense)
  {
    this.expenses.push(expense);
    // console.log(this.expenses)
  }

  getAllExpenses()
  {
    return this.expenses;
  }
}
