import { Injectable } from '@angular/core';
import {Http, Response, Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ForoService {
  public url:string

  constructor(private _http:Http) { 
    this.url = "http://localhost:3000/"
  }

  getForos(){
    return this._http.get(this.url+"foros").map(res=>res.json())
  }
  getById(idForo){
    return this._http.get(this.url+"foros/"+idForo).map(res=>res.json())
  }
  comentarForo(comentario){
    let jwtAuth = "jwt "+localStorage.getItem("token")    
    let json = JSON.stringify({"idForo":comentario.idForo,"mensaje":comentario.mensaje,"idComentarioPadre":comentario.idComentarioPadre})
    let headers = new Headers({"Content-type":"application/json","Authorization":jwtAuth})
    return this._http.post(this.url+"comentarios",json,{headers:headers}).map(res=>res.json())
  }
}
