import { Injectable } from '@angular/core';
import {Http, Response, Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ContactoService {
  public url:string

  constructor(private _http:Http) { 
    this.url = "http://localhost:3000/"
//    this.url = "http://167.99.235.43:3000/"
  }

  contacto(formContacto){

    let json = JSON.stringify(formContacto)
    let headers = new Headers({"Content-type":"application/json"})
    return this._http.post(this.url+"usuarios/contacto",json,{headers:headers}).map(res=>res.json())
  }
}
