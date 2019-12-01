import { Component, OnInit, Input } from '@angular/core';
import { DriverService } from '../driver.service';


@Component({
  selector: 'app-new-driver-form',
  templateUrl: './new-driver-form.component.html',
  styleUrls: ['./new-driver-form.component.css']
})
export class NewDriverFormComponent implements OnInit {
@Input() firstName: string;
@Input() lastName: string;
@Input() nickname:string;
@Input() zip: number;
@Input() model: string;
@Input() brand: string;
@Input() color: string;

constructor(private _myService: DriverService) { }

onSubmit(){
  console.log("You submitted: " 
  + this.firstName + " " 
  + this.lastName + " " 
  + this.nickname + " " 
  + this.zip + " " 
  + this.brand + " " 
  + this.model + " " 
  + this.color );
  this._myService.addDriver(
    this.firstName ,
    this.lastName, 
    this.nickname, 
    this.zip, 
    this. brand, 
    this.model, 
    this.color);
}



  ngOnInit() {
  }

}
