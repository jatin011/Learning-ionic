import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from '../expense-service.service';
import { Expense } from '../expense.model';

@Component({
  selector: 'app-show-expenses',
  templateUrl: './show-expenses.page.html',
  styleUrls: ['./show-expenses.page.scss'],
})
export class ShowExpensesPage implements OnInit {


  expenses:Expense[];
  constructor(private expenseService:ExpenseServiceService) { }

  ngOnInit() {
    this.expenses=this.expenseService.getAllExpenses();
  }

}
