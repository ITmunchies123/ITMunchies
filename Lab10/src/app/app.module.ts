import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { accountcreation } from './account.creation';  
import { HttpClientModule } from '@angular/common/http';
import { NewRegistrationFormComponent } from './new-registration-form/new-registration-form.component'; 
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material'


@NgModule({
  declarations: [
    AppComponent,
    NewRegistrationFormComponent,
    //accountcreation
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    //NgModule,
    //AppComponent,
    //AppRoutingModule,
    //accountcreation,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  
  ],
  providers: [accountcreation],
  bootstrap: [AppComponent]
})
export class AppModule { }
