import { Component, OnInit, Input } from '@angular/core';
import { accountcreation } from '../account.creation';  
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

  constructor(private _myaccountcreation: accountcreation) { }
  onSubmit(){
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
  }
  
  ngOnInit() {
  }

}
