import { Component, OnInit, Input } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import { FoodService } from '../food.service';
@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  @Input() 
  search
  : string;
  @Input() 
  save
  : string;

  private mode = 'add'
  private id:string;
  private place:string
  private otherID:string

  constructor(private _myService:FoodService,private router:Router,public route:ActivatedRoute) { }

  onSubmit()
  {
    if(this.mode == 'add'){
      this._myService.saveSearch(this.search ,this.save);
      this.router.navigate(['/listFoods'])
      console.log("You submitted: " + this.search + " " + this.save);
    }
    else if(this.mode == 'edit'){
      this._myService.updateSearch(this.id,this.save);
      console.log("You submitted: " + this.search + " " + this.save);
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {

      if (paramMap.has('_id'))
      
      {this.mode = 'edit'; /*request had a parameter _id */
      
      this.id = paramMap.get('_id');
      this.otherID = paramMap.get('id')
      this.place = paramMap.get('place')
    
    }
      
      else {this.mode = 'add';
      
      this.id = null; }
      
      });
  }
}
