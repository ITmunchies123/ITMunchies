import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FoodService } from './food.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodFaveFormComponent } from './food-fave-form/food-fave-form.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    FoodFaveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
