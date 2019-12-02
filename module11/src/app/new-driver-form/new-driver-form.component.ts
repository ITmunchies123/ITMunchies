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
               
               this.id = paramMap.get('_id');}
               
               else {this.mode = 'add';
               
              //  this.id = null;
             }
               
               });
           }
         }


// onSubmit(){
//   if(this.mode == "add"){
//      console.log("You submitted: " 
//   + this.firstName + " " 
//   + this.lastName + " " 
//   + this.nickname + " " 
//   + this.zip + " " 
//   + this.brand + " " 
//   + this.model + " " 
//   + this.color );

//   this._myService.addDriver(
    
    // this.firstName ,
    // this.lastName, 
    // this.nickname, 
    // this.zip, 
    // this. brand, 
    // this.model, 
    // this.color);
//     this.router.navigate(['/listDrivers']); 
//   }
//   else if(this.mode == "edit"){
//     console.log("You submitted: " 
//     + this.firstName + " " 
//     + this.lastName + " " 
//     + this.nickname + " " 
//     + this.zip + " " 
//     + this.brand + " " 
//     + this.model + " " 
//     + this.color );
  
//     this._myService.updateDriver(
//       this.id,
//       this.firstName ,
//       this.lastName, 
//       this.nickname, 
//       this.zip, 
//       this. brand, 
//       this.model, 
//       this.color);
//       this.router.navigate(['/listDrivers']); 
//   }
//   // console.log("You submitted: " 
//   // + this.firstName + " " 
//   // + this.lastName + " " 
//   // + this.nickname + " " 
//   // + this.zip + " " 
//   // + this.brand + " " 
//   // + this.model + " " 
//   // + this.color );

//   // this._myService.addDriver(
    
//   //   this.firstName ,
//   //   this.lastName, 
//   //   this.nickname, 
//   //   this.zip, 
//   //   this. brand, 
//   //   this.model, 
//   //   this.color);
//   //   this.router.navigate(['/listDrivers']);
// }



//   ngOnInit() {

//     // this.route.paramMap.subscribe((paramMap: ParamMap ) => {
//     //   if (paramMap.has('_id'))
//     //     { this.mode = 'edit'; /*request had a parameter _id */ 
//     //       this.id = paramMap.get('_id');}
//     //   else {this.mode = 'add';
//     //       this.id = null; }
//     // });
 

//     this.route.paramMap.subscribe((paramMap: ParamMap ) => {
 
//       if (paramMap.has('id'))
      
//       { this.mode = 'edit'; /*request had a parameter _id */
      
//       this.id = paramMap.get('id');}
      
//       else {this.mode = 'add';
      
//       this.id = null; }
      
//       });

//     // this.route.paramMap.subscribe((paramMap: ParamMap ) => {
//     //   if (paramMap.has('_id'))
//     //     { this.mode = 'edit'; /*request had a parameter _id */ 
//     //     this._myService.updateDriver(this.id, 
//     //       this.firstName,
//     //       this.lastName,
//     //       this.nickname, 
//     //       this.zip, 
//     //       this.brand, 
//     //       this.model, 
//     //       this.color);}  
//        // this.id = paramMap.get('_id');}
//     //   else {this.mode = 'add';
//     //   this._myService.addDriver(
//     //     this.firstName ,
//     //     this.lastName,
//     //     this.nickname, 
//     //     this.zip, 
//     //     this. brand, 
//     //     this.model, 
//     //     this.color);}
//     //   this.id = null 
//     // });
//    }

// }
