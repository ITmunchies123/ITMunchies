import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class accountcreation {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data 
    getaccountcreation() {
        return this.http.get('http://localhost:8000/accountcreation');
    }


// Uses http.post() to post data 
addaccountcreation(username: string, password: string, fname: string, lname: string, address: string, city: string, state: string, zip: string, email: string, phone: string) {
    this.http.post('http://localhost:8000/accountcreation',{ username, password, fname, lname, address, city, state, zip, email, phone })
  .subscribe((responseData) => {
     console.log(responseData);
   }); 
   
}

deleteAccounts(accountsID: string) {
this.http.delete('http://localhost:8000/accountcreation/' + accountsID)
.subscribe (() =>{
console.log('Deleted: ' + accountsID);
});
//location.reload();
} 

}