import { Component, OnInit } from '@angular/core';
import { accountcreation } from './account.creation';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lab10';
  //declare variable to hold response and make it public to be accessible from components.html
  public acccreation;
  //initialize the call using StudentService 
  constructor(private _myService: accountcreation) { }
  ngOnInit() {
    this.getaccountcreation();
  }
  //method called OnInit
  getaccountcreation() {
   this._myService.getaccountcreation().subscribe(
      //read data and assign to public variable students
      data => { this.acccreation = data},
      err => console.error(err),
      () => console.log('finished loading')
    );
  }
  
   //delete for drivers
onDelete(accountId: string) {
  this._myService.deleteAccounts(accountId);
}

}

