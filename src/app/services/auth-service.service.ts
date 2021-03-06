import { Injectable } from '@angular/core';
import {Http, Response, Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Usuario } from '../models/Usuario';

@Injectable()
export class AuthServiceService {

  public url:string

  constructor(private _http:Http) { 
    this.url = "http://localhost:3000/"
//    this.url = "http://167.99.235.43:3000/"
  }

  login(user:string,password:string){
    let json = JSON.stringify({"correo":user,"contrasenia":password})
    let headers = new Headers({"Content-type":"application/json"})
    return this._http.post(this.url+"usuarios/login",json,{headers:headers})
                     .map(res=>res.json());
  }
  
  isLogged(){
    let token = localStorage.getItem("token")
    return token?true:false
  }

  registro(foto:File,user:Usuario){
    let jwtAuth = "jwt "+localStorage.getItem("token")
    var formData = new FormData();
    formData.append('fotoPerfil',foto,foto.name);
    formData.append("nombre",user.nombre)
    formData.append("apellidoPaterno",user.apellidoPaterno)
    formData.append("apellidoMaterno",user.apellidoMaterno)
    formData.append("correo",user.correo)
    formData.append("genero",user.genero)
    formData.append("ocupacion",user.ocupacion)
    formData.append("telefono",user.telefono)
    formData.append("contrasenia",user.contrasenia)
    formData.append("empresa",user.empresa)
    formData.append("sector",user.sector)
    formData.append("pais",user.pais)
    formData.append("ciudad",user.ciudad)
    formData.append("estado",user.estado)
   
    const headers = new Headers({"Authorization":jwtAuth});
    let options = new RequestOptions({ headers });
    let url = this.url+"usuarios/";

    return this._http.post(url, formData, options)
                     .map(res=>res.json())
  }
}
