import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  public profile:Usuario
  constructor() { 
    this.profile = new Usuario("","","","","","","","","","","",false,"","","","")
  }

  ngOnInit() {
      this.profile.nombre =localStorage.getItem("nombre")
      this.profile.apellidoMaterno =localStorage.getItem("apellidoMaterno")
      this.profile.apellidoPaterno =localStorage.getItem("apellidoPaterno")
      this.profile.contrasenia =localStorage.getItem("contrasenia")
      this.profile.correo =localStorage.getItem("correo")
      this.profile.empresa =localStorage.getItem("empresa")
      this.profile.fotoPerfil =localStorage.getItem("fotoPerfil")
      this.profile.genero =localStorage.getItem("genero")
      this.profile.isAdmin =Boolean(localStorage.getItem("isAdmin"))
      this.profile.ocupacion =localStorage.getItem("ocupacion")
      this.profile.sector =localStorage.getItem("sector")
      this.profile._id =localStorage.getItem("id")
      this.profile.pais =localStorage.getItem("pais")
      this.profile.estado =localStorage.getItem("estado")
      this.profile.ciudad =localStorage.getItem("ciudad")
      this.profile.telefono =localStorage.getItem("telefono")
  }

}
