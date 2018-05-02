import { Component, OnInit } from '@angular/core';
import { ForoService } from '../services/foro.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { Foro } from '../models/Foro';
import { Comentario } from '../models/Comentario';
import { AuthServiceService } from '../services/auth-service.service';


@Component({
  selector: 'app-detalle-foro',
  templateUrl: './detalle-foro.component.html',
  styleUrls: ['./detalle-foro.component.css'],
  providers:[ForoService,AuthServiceService]
})
export class DetalleForoComponent implements OnInit {

  public foro:any
  public comentarios: Array<Comentario>
  public TodosComentarios: Array<Comentario>
  public respuestas: Array<Comentario>
  public newComentario : string
  public newRespuesta : string
  constructor(
    private _foroService:ForoService,
    public _authService:AuthServiceService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.foro = new Foro("","","",new Date(),"",0,"")  
    this.comentarios = []
    this.TodosComentarios = []
    this.respuestas = []
    this.newComentario= ""
    this.newRespuesta=""
  }

  ngOnInit() {
    this.loadData()
  }

  loadData(first:Boolean=true){
    this.comentarios = []
    this.TodosComentarios = []
    this.respuestas = []
    this.newComentario= ""
    this.newRespuesta=""
    this._route.params.forEach((params:Params)=>{
      this._foroService.getById(params["idForo"]).subscribe(
        res=>{
          if (first) {
            this.foro = res.foro
          }
          this.TodosComentarios = res.commentarios
          for (const coment of this.TodosComentarios) {
            if (coment.idComentarioPadre==undefined) {
              this.comentarios.push(coment)
            }
          }
          for (const coment of this.comentarios) {
            coment.isHidden = true
            coment.respuestas = []
            for (const resp of this.TodosComentarios) {
              if (resp.idComentarioPadre == coment._id) {
                coment.respuestas.push(resp)
              }
            }
          }
         console.log(this.comentarios);
          
        },err=>{
          console.log(err);
          
        })
    })
  }
  sendMessage(index){
    var newComentario
    if (index<0) {
      newComentario = {idForo:this.foro._id,mensaje:this.newComentario,idComentarioPadre:null}
    } else {
      newComentario = {idForo:this.foro._id,mensaje:this.newRespuesta,idComentarioPadre:this.comentarios[index]._id}
    }
      this._foroService.comentarForo(newComentario).subscribe(
        res=>{
          console.log(res);
          this.loadData(false)
        },
        err=>{
          console.log(err);
        })
  }

  muestraRespuestas(idComentario){
    for (const c of this.comentarios) {
      c.isHidden= true
    }
    this.newRespuesta = ""
    this.comentarios[idComentario].isHidden = false
  }
}
