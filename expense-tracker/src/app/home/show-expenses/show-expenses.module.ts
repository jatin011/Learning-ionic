import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowExpensesPageRoutingModule } from './show-expenses-routing.module';

import { ShowExpensesPage } from './show-expenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowExpensesPageRoutingModule
  ],
  declarations: [ShowExpensesPage]
})
export class ShowExpensesPageModule {}
