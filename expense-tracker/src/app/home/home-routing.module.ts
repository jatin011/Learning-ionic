import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'add-new-expense',
        loadChildren: () => import('./add-new-expense/add-new-expense.module').then( m => m.AddNewExpensePageModule)
      },
      {
        path: 'show-expenses',
        loadChildren: () => import('./show-expenses/show-expenses.module').then( m => m.ShowExpensesPageModule)
      },
      {
        path: '',
        redirectTo: '/home/add-new-expense',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
