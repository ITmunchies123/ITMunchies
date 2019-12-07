import { Component, OnInit, Input } from '@angular/core';
import { DriverService } from '../driver.service';
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-new-driver-form',
  templateUrl: './new-driver-form.component.html',
  styleUrls: ['./new-driver-form.component.css']
})
export class NewDriverFormComponent implements OnInit {
@Input() firstName: string;
@Input() lastName: string;
@Input() nickname:string;
@Input() zip: string;
@Input() model: string;
@Input() brand: string;
@Input() color: string;

private mode = 'add'; //default mode
private id: string; //driver ID
private fname:string;
private lname:string;
private nckname:string;
private zp:string;
private brnd:string;
private modl:string;
private colr:string;
constructor(private _myService: DriverService, 
            private router: Router, 
           public route: ActivatedRoute) { }

           onSubmit()
           {
             if(this.mode == 'add'){
               this._myService.addDriver( 
                this.firstName,
                this.lastName, 
                this.nickname, 
                this.zip, 
                this.brand, 
                this.model, 
                this.color);
               this.router.navigate(['/listDrivers'])
              // console.log("You submitted: " + this.search + " " + this.save);
             }
             else if(this.mode == 'edit'){
               this._myService.updateDriver(
                this.id,
                this.firstName,
                this.lastName, 
                this.nickname, 
                this.zip, 
                this.brand, 
                this.model, 
                this.color);
                this.router.navigate(['/listDrivers']);
              // console.log("You submitted: " + this.search + " " + this.save);
             }
           }
          
           ngOnInit() {
             this.route.paramMap.subscribe(
               (paramMap: ParamMap ) => {
          
               if (paramMap.has('_id'))
               
               { this.mode = 'edit'; /*request had a parameter _id */
               
               this.id = paramMap.get('_id');
               this.fname = paramMap.get('firstName')
               this.lname = paramMap.get('lastName')
               this.nckname = paramMap.get('nickname')
               this.zp = paramMap.get('zip')
               this.brnd = paramMap.get('brand')
               this.modl = paramMap.get('model')
               this.colr = paramMap.get('color')
              }
               
               else {this.mode = 'add';
               
              //  this.id = null;
       
             }
               
               });
           }
         }