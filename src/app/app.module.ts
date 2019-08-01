import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {IngredientModule} from './ingredient/ingredient.module';
import {RecipeModule} from './recipes/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IngredientModule,
    RecipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
