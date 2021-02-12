import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ExpenseServiceService } from '../expense-service.service';
import { Expense } from '../expense.model';

@Component({
  selector: 'app-add-new-expense',
  templateUrl: './add-new-expense.page.html',
  styleUrls: ['./add-new-expense.page.scss'],
})
export class AddNewExpensePage implements OnInit {

  expenseDate;
  actualExpenseDate:Date;
  expenseReason:String;
  expenseAmount:String;

  finalExpense:Expense;

  constructor(private expenseService:ExpenseServiceService,
              private alertCtrl:AlertController) { }

  ngOnInit() {}

  validateInputs(): Boolean {
    return this.expenseDate!=null && this.expenseReason.trim().length>0  && this.expenseAmount.trim().length>0;
  }

  clear():void{
    this.expenseAmount=""
    this.expenseReason=""
  }


  addExpense()
  {
    if(!this.validateInputs())
    {
      this.alertCtrl.create({
        header:"Invalid Inputs",
        message:"Please Provide Valid Reason, Amount and Date",
        buttons:[{
          text:"okay",
          role:"okay"
        }]
      }).then(alertEl=>{
        alertEl.present();
      })

      return;
    }
    this.actualExpenseDate=new Date(this.expenseDate)

  this.finalExpense={
    expenseReason:this.expenseReason,
    expenseAmount:this.expenseAmount,
    expenseDate:this.expenseDate
  }

  this.expenseService.addExpense(this.finalExpense);
  this.clear()
  }
}
