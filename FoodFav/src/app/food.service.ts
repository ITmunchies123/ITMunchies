import {
    Injectable
    } from '@angular/core';
    import { 
    HttpClient
    , HttpHeaders } from '@angular/common/http';
    //we know that response will be in JSON format
    const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    @Injectable()
    export class FoodService {
        constructor(private http:HttpClient) {}
    // Uses http.get() to load data 
        getFood() {
            return this.http.get(
    'http://localhost:8000/find'
    );
        }
        saveSearch(search: string, save: string) {
            this.http.post('http://localhost:8000/save',{search,save})
          .subscribe((responseData) => {
             console.log(responseData);
           });
           location.reload() 
        }
        delete(id:number){
            this.http.delete('http://localhost:8000/delete/'+id)
          .subscribe((responseData) => {
             console.log(responseData);
           });
           location.reload()
        }
        updateSearch(id: string, save: string) {
            this.http.put('http://localhost:8000/updateFoods/'+id,{save})
          .subscribe((responseData) => {
             console.log(responseData);
           });
           location.reload()
        }
    }