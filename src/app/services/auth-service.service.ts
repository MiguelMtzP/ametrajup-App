import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Usuario } from '../models/Usuario';

@Injectable()
export class AuthServiceService {

  public url:string

  constructor(private _http:Http) { 
    this.url = "http://localhost:3000/"
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
    return new Promise((resolve,reject)=>{
      var formData = new FormData();
      var xhr= new XMLHttpRequest();
      let jwtAuth = "jwt "+localStorage.getItem("token")
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
      xhr.onreadystatechange= ()=>{
        if(xhr.readyState==4){
          if(xhr.status==200){
            resolve(xhr.response.json());
          }else{
            reject(xhr.response);
          }
        }
      }
      xhr.open('POST',this.url+"usuarios/",true);
      xhr.setRequestHeader("Authorization",jwtAuth);
      //cabeceras
      xhr.send(formData);
    });
  }
}
