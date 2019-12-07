import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FoodService } from './food.service';
import {Routes} from '@angular/router' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodFaveFormComponent } from './food-fave-form/food-fave-form.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule } from '@angular/material/button';
import {MatMenuModule,MatIconModule} from '@angular/material'
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { RouterModule } from '@angular/router';
import { ListFoodsComponent } from './list-foods/list-foods.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddFoodComponent } from './add-food/add-food.component';
const appRoutes: Routes = [{
  
  path: 'addFoods', //when students added
  
  component: AddFoodComponent
  
  }, 
  {
path: 'editFood/:_id/:id/:place',
component: AddFoodComponent
  },
  {
  
  path: 'listFoods', //when students listed
  
  component: ListFoodsComponent
  
  },{
  
  path: '**',
  
  component: NotFoundComponent
  
  }
  
  ];
@NgModule({
  declarations: [
    AppComponent,
    FoodFaveFormComponent,
    NavigationMenuComponent,
    ListFoodsComponent,
    AddFoodComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
