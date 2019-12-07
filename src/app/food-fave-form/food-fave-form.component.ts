import { Component, OnInit,Input } from '@angular/core';
import { FoodService } from '../food.service';
@Component({
  selector: 'app-food-fave-form',
  templateUrl: './food-fave-form.component.html',
  styleUrls: ['./food-fave-form.component.css']
})
export class FoodFaveFormComponent implements OnInit {
  @Input() 
  search
  : string;
  @Input() 
  save
  : string;

  constructor(private _myService:FoodService) { }

  ngOnInit() {
  }
  onSubmit()
  {
    this._myService.saveSearch(this.search ,this.save);
    console.log("You submitted: " + this.search + " " + this.save);
  }

}
