import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//added this for step7
import { HttpClientModule } from '@angular/common/http';  
import { StudentService } from './student.service';
import { NewStudentFormComponent } from './new-student-form/new-student-form.component';  

//added for step3
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//added for step5
import { FormsModule } from '@angular/forms';
import {MatButtonModule } from '@angular/material/button';
import { NewDriverFormComponent } from './new-driver-form/new-driver-form.component';
import { DriverService } from './driver.service';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';


//added for lab11
import { MatMenuModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListDriversComponent } from './list-drivers/list-drivers.component';


const appRoutes: Routes = [ 
  {
  path: '',                     //default component to display
   component: NewDriverFormComponent
 },       
 {
 path: 'addDriver',         //when driver added 
   component: NewDriverFormComponent
 },       
 {
 path: 'listDrivers',         //when driver added 
   component: ListDriversComponent
 } ,
        {

  path: 'editDriver/:_id/:firstName/:lastName/:nickname/:zip/:brand/:model/:color',         //when driver added 
    component: NewDriverFormComponent
  },         
 {
    path: '**',                 //when path cannot be found
    component: NotFoundComponent
  }   
];

@NgModule({
  declarations: [
    AppComponent,
    NewStudentFormComponent,
    NewDriverFormComponent,
    NavigationMenuComponent,
    NotFoundComponent,
    ListDriversComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DriverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
