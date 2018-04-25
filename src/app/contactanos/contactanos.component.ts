import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl,Validators} from '@angular/forms';
import { ContactoService } from '../services/contacto.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css'],
  providers:[ContactoService]
})
export class ContactanosComponent implements OnInit {

  public email:string
  public asunto:string
  public ocupacion:string
  public telefono: string
  public nombre: string
  public mensaje: string
  public isprocesing:boolean
  public processed:boolean
  constructor(
    private _contactoService: ContactoService
  ) { 
      this.email= ""
      this.asunto= ""
      this.ocupacion= ""
      this.telefono= ""
      this.mensaje= ""
      this.nombre= ""
  }

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.email= localStorage.getItem("correo")
      
      this.ocupacion= localStorage.getItem("ocupacion")
      this.telefono= localStorage.getItem("telefono")
      
      this.nombre= localStorage.getItem("nombre")+ " "+ localStorage.getItem("apellidoPaterno")
    }
    this.isprocesing= false
    this.processed = false
  }

  cleanform(){
      this.email= ""
      this.asunto= ""
      this.ocupacion= ""
      this.telefono= ""
      this.mensaje= ""
      this.nombre= ""
  }
  submit(){
    let json = {
      email:this.email,
      asunto:this.asunto,
      ocupacion:this.ocupacion,
      telefono:this.telefono,
      mensaje:this.mensaje,
      nombre:this.nombre
    }
    this.isprocesing = true
    this._contactoService.contacto(json).subscribe(res=>{
      console.log(res)
      this.isprocesing = false
      this.processed = true
      this.cleanform()
    },err=>{
      console.error(err);
      
    })
  }

}
