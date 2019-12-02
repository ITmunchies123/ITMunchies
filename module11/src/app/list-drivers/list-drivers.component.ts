import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service' ;

@Component({
  selector: 'app-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css']
})
export class ListDriversComponent implements OnInit {

  public drivers;
  

  //initialize the call using StudentService 
  constructor(private _myDriver: DriverService) { }

  ngOnInit() {
    
    this.getDriver();
  }
 

  //method called OnInit
  getDriver() {
  this._myDriver.getDriver().subscribe(
     //read data and assign to public variable students
     data => { this.drivers = data},
     err => console.error(err),
     () => console.log('finished loading')
   );
 }
 //delete for drivers
onDelete(driverId: string) {
  this._myDriver.deleteDriver(driverId);
  }

}