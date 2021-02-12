import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowExpensesPage } from './show-expenses.page';

const routes: Routes = [
  {
    path: '',
    component: ShowExpensesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowExpensesPageRoutingModule {}
