import { Component, OnInit } from '@angular/core';
import { Usuario } from "../models/Usuario";
import {Router,ActivatedRoute,Params} from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[AuthServiceService]
})
export class RegistroComponent implements OnInit {
  public user: Usuario
  public foto:File
  public isLoaded:Boolean
  constructor(
    private _authService:AuthServiceService,
    private _router:Router
  ) { 
    this.user = new Usuario("","","","","","","","","","","",false,"","","","")
    this.isLoaded= false
  }

  uploadImage(fileInput:any){
    this.foto=<File>fileInput.target.files[0];
    this.isLoaded = !(this.foto == undefined )

  }

  enviaForm(){
    this._authService.registro(this.foto,this.user).subscribe(res=>{
      console.log(res);
      localStorage.setItem("token",res.token)
      localStorage.setItem("nombre",res.usuarioRegistrado.nombre)
      localStorage.setItem("apellidoMaterno",res.usuarioRegistrado.apellidoMaterno)
      localStorage.setItem("apellidoPaterno",res.usuarioRegistrado.apellidoPaterno)
      localStorage.setItem("contrasenia",res.usuarioRegistrado.contrasenia)
      localStorage.setItem("correo",res.usuarioRegistrado.correo)
      localStorage.setItem("empresa",res.usuarioRegistrado.empresa)
      localStorage.setItem("fotoPerfil",res.usuarioRegistrado.fotoPerfil)
      localStorage.setItem("genero",res.usuarioRegistrado.genero)
      localStorage.setItem("isAdmin",res.usuarioRegistrado.isAdmin)
      localStorage.setItem("ocupacion",res.usuarioRegistrado.ocupacion)
      localStorage.setItem("sector",res.usuarioRegistrado.sector)
      localStorage.setItem("id",res.usuarioRegistrado._id)
      localStorage.setItem("telefono",res.usuarioRegistrado.telefono)
      if (res.usuarioRegistrado.isAdmin&&false){
        //redirige al admin view
      }else{
        this._router.navigate(["/"])
      }
      
    },err=>{
      console.log(err);
        
    })
  }
  ngOnInit() {
  }

}
