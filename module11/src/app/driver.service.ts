import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class DriverService {
    
     constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data 
    getDriver() {
        return this.http.get('http://localhost:8000/driver');
    }

    // Uses http.post() to post data 
   addDriver(firstName: string, lastName: string, nickname: string, zip: string, brand: string, model: string, color: string) {
        this.http.post('http://localhost:8000/driver',{ firstName, lastName, nickname, zip, brand, model, color})
      .subscribe((responseData) => {
         console.log(responseData);
       }); 
       //location.reload();
    }


    deleteDriver(driverId: string) {
        this.http.delete("http://localhost:8000/driver/" + driverId)
          .subscribe(() => {
              console.log('Deleted: ' + driverId);
          });
          location.reload();
      }
    
      updateDriver( driverId: string,
                    firstName: string, 
                    lastName: string, 
                    nickname: string, 
                    zip: string, 
                    brand: string, 
                    model: string, 
                    color: string) 
        {
        //request path http://localhost:8000/drivers/5xbd456xx 
        //first and last names will be send as HTTP body parameters 
            this.http.put("http://localhost:8000/driver/" 
                 + driverId,{ firstName, lastName, nickname, zip, brand, model, color})
              .subscribe(() => {
                  console.log('Updated: ' + driverId);
              });
              location.reload();
        }
    


}

