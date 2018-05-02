import { Component, OnInit } from '@angular/core';
import { Foro } from '../models/Foro';
import { ForoService } from '../services/foro.service';
import { GaleriaService } from '../services/galeria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-foro',
  templateUrl: './crear-foro.component.html',
  styleUrls: ['./crear-foro.component.css'],
  providers:[ForoService,GaleriaService]
})
export class CrearForoComponent implements OnInit {

  public foro: Foro
  fotos: Array<File>
  constructor(
        private _foroService:ForoService,
        private _galeriaService:GaleriaService,
        private _router:Router
      ){ 
    this.foro = new Foro("","","",new Date(),"",0,"")
    this.fotos = []
  }

  ngOnInit() {

  }

  cargaFotos(event:any,forma){
    let arrayFiles = event.target.files
    for (const file of arrayFiles) {
      let image = <File> file
      this.fotos.push(image)
    }
  }

  enviaForm(){
    this._foroService.crearForo(this.foro).subscribe(res=>{
      let idGaleria = res.foro.idGaleria
      this._galeriaService.cargaFoto(this.fotos,idGaleria).subscribe(resGal=>{
        console.log(resGal);
        this._router.navigate(["detalleForo",res.foro._id])
      },err=>{
        console.error(err);
        
      })
    },err=>{
      console.error(err);
      
    })
    
  }
}
