import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewExpensePage } from './add-new-expense.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewExpensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewExpensePageRoutingModule {}
