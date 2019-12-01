import { Component, OnInit, Input } from '@angular/core';
import { accountcreation } from '../account.creation';  
import { Router } from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { AccountsListComponent } from '../accounts-list/accounts-list.component';

@Component({
  selector: 'app-new-registration-form',
  templateUrl: './new-registration-form.component.html',
  styleUrls: ['./new-registration-form.component.css']
})
export class NewRegistrationFormComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;
  @Input() fname: string;
  @Input() lname: string;
  @Input() address: string;
  @Input() city: string;
  @Input() state: string;
  @Input() zip: string;
  @Input() email: string;
  @Input() phone: string;
  private mode = 'Add'; //default mode
  private id: string; //student ID

  constructor(private _myaccountcreation: accountcreation, private router:Router, public route: ActivatedRoute ) { }
  onSubmit(){
      if(this.mode == 'Add'){
        console.log("You submitted: " 
        + this.username + " " 
        + this.password + " " 
        + this.fname + " " 
        + this.lname + " " 
        + this.address + " " 
        + this.city + " " 
        + this.state + " " 
        + this.zip + " " 
        + this.email + " " 
        + this.phone);
        this._myaccountcreation.addaccountcreation(
          this.username,
          this.password, 
          this.fname, 
          this.lname,
          this.address, 
          this.city, 
          this.state,
          this.zip, 
          this.email, 
          this.phone);
          this.router.navigate(['/listAccounts']);
      }
      else if(this.mode == 'Edit'){
        console.log("You submitted: " 
        + this.username + " " 
        + this.password + " " 
        + this.fname + " " 
        + this.lname + " " 
        + this.address + " " 
        + this.city + " " 
        + this.state + " " 
        + this.zip + " " 
        + this.email + " " 
        + this.phone);
        this._myaccountcreation.updateAccounts(
          this.id,
          this.username,
          this.password, 
          this.fname, 
          this.lname,
          this.address, 
          this.city, 
          this.state,
          this.zip, 
          this.email, 
          this.phone);
          this.router.navigate(['/listAccounts']);
      }
  }
   ngOnInit(){
     this.route.paramMap.subscribe((paramMap: ParamMap ) => {
        if (paramMap.has('_id'))
          { this.mode = 'Edit'; /*request had a parameter _id */ 
            this.id = paramMap.get('_id');}
 else {this.mode = 'Add';
 this.id = null; }
 });
 }
          
};