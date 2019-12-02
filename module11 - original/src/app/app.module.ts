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


@NgModule({
  declarations: [
    AppComponent,
    NewStudentFormComponent,
    NewDriverFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [StudentService, DriverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
