import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewExpensePageRoutingModule } from './add-new-expense-routing.module';

import { AddNewExpensePage } from './add-new-expense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewExpensePageRoutingModule
  ],
  declarations: [AddNewExpensePage]
})
export class AddNewExpensePageModule {}
