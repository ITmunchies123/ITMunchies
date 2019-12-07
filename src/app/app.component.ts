import { Component} from '@angular/core';
/*import { FoodService } from './food.service';*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  title ='module9';

/*   public food
;
//initialize the call using StudentService 
  constructor(private _myService: FoodService) { }
  ngOnInit() {
    this.getFood();
  }
//method called OnInit
  getFood() {
   this._myService.getFood().subscribe(
//read data and assign to public variable students
      data => { this.food = data},
      err => console.error(err),
      () => console.log('finished loading '+this.food[0].place)
    );
  }
  onDelete(id:number){
    this._myService.delete(id)
  } */
}
