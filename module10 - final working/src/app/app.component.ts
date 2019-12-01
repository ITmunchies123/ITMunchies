import { Component, OnInit } from '@angular/core';
//added this for step8

import { DriverService } from './driver.service' ;
import { StudentService } from './student.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title ='module10';
  //declare variable to hold response and make it public to be accessible from components.html
  public students;
  public drivers;
  //initialize the call using StudentService 
  constructor(private _myService: StudentService , private _myDriver: DriverService) { }
  ngOnInit() {
    this.getStudents();
    this.getDriver();
  }
  //method called OnInit
  getStudents() {
   this._myService.getStudents().subscribe(
      //read data and assign to public variable students
      data => { this.students = data},
      err => console.error(err),
      () => console.log('finished loading')
    );
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

//  //delete for students
//  onDelete(studentId: string) {
//   this._myService.deleteStudent(studentId);
// }


}
