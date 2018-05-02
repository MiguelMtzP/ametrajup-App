import { Injectable } from '@angular/core';
import {Http, Response, Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class GaleriaService {

  public url:string

  constructor(private _http:Http) { 
    this.url = "http://localhost:3000/"
//    this.url = "http://167.99.235.43:3000/"
  }

  cargaFoto(fotos:Array<File>,idGaleria:string){
    let jwtAuth = "jwt "+localStorage.getItem("token")
    var formData = new FormData();
      for (const foto of fotos) {
        formData.append("fotos",foto,foto.name)
      }
    
    const headers = new Headers({"Authorization":jwtAuth});
    let options = new RequestOptions({ headers });
    let url = this.url+"galerias/"+idGaleria;

    return this._http.put(url, formData, options)
                     .map(res=>res.json())
  }
}
