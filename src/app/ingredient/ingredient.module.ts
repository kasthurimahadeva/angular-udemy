import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  exports: [
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class IngredientModule { }
