import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { AuthServiceService } from "../services/auth-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthServiceService]
})
export class LoginComponent implements OnInit {

  public user:string
  public password:string

  constructor(
    private _authService:AuthServiceService,
    private _router:Router
  ) { 

  }

  ngOnInit() {
  }

  onSubmit(){
    this._authService.login(this.user,this.password).subscribe(res=>{
      console.log(res);
      localStorage.setItem("token",res.token)
      localStorage.setItem("nombre",res.user.nombre)
      localStorage.setItem("apellidoMaterno",res.user.apellidoMaterno)
      localStorage.setItem("apellidoPaterno",res.user.apellidoPaterno)
      localStorage.setItem("contrasenia",res.user.contrasenia)
      localStorage.setItem("correo",res.user.correo)
      localStorage.setItem("empresa",res.user.empresa)
      localStorage.setItem("fotoPerfil",res.user.fotoPerfil)
      localStorage.setItem("genero",res.user.genero)
      localStorage.setItem("isAdmin",res.user.isAdmin)
      localStorage.setItem("ocupacion",res.user.ocupacion)
      localStorage.setItem("sector",res.user.sector)
      localStorage.setItem("id",res.user._id)
      localStorage.setItem("pais",res.user.pais)
      localStorage.setItem("estado",res.user.estado)
      localStorage.setItem("ciudad",res.user.ciudad)
      localStorage.setItem("telefono",res.user.telefono)
      if (res.user.isAdmin&&false){
        //redirige al admin view
      }else{
        this._router.navigate(["/"])
      }
    },err=>{
      console.log(err);
      
    })
    
  }

}
