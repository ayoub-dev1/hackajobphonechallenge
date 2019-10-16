import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactPhone } from './../interfaces/contact.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
	  EDPOINT:string = 'http://www.mocky.io/v2/581335f71000004204abaf83';

  constructor(private _http: HttpClient) { 
  }




  getPhonesContact() {
  	return this._http.get(`${this.EDPOINT}`);
  }
  
}
