import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { accountcreation } from './account.creation';
import { HttpClientModule } from '@angular/common/http';
import { NewRegistrationFormComponent } from './new-registration-form/new-registration-form.component';
// The MatMenuModule, MatIconModule are for LAB 11
import { MatFormFieldModule, MatMenuModule, MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
// Line 16 is for LAB 11
import { Routes, RouterModule } from '@angular/router';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogInComponent } from './log-in/log-in.component'

// Lines 21-34 for LAB 11
const appRoutes: Routes = [ {
  path: '',         //when students added
  component: LogInComponent
},       {
  path: 'log-in',         //when students added
  component: LogInComponent
},       {
   path: 'addAccounts',         //when students added
   component: NewRegistrationFormComponent
 },       {
   path: 'editAccount/:_id/:username/:password/:fname/:lname/:address/:city/:state/:zip/:phone/:email',         //when editing accounts
   component: NewRegistrationFormComponent
 },       {
   path: 'listAccounts',       //when students listed
   component: AccountsListComponent
 },       {
   path: '**',                 //when path cannot be found
   component: NotFoundComponent
 }
];

@NgModule({
  declarations: [
    AppComponent,
    NewRegistrationFormComponent,
    NavigationMenuComponent,
    AccountsListComponent,
    NotFoundComponent,
    LogInComponent,
    //accountcreation
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    //NgModule,
    //AppComponent,
    AppRoutingModule,
    //accountcreation,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    //The next three lines are for LAB 11
    MatMenuModule,
    MatIconModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [accountcreation],
  bootstrap: [AppComponent]
})
export class AppModule { }
