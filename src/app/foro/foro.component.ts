import { Component, OnInit } from '@angular/core';
import { ForoService } from '../services/foro.service';
import { Foro } from '../models/Foro';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css'],
  providers:[ForoService]
})
export class ForoComponent implements OnInit {

  public foros: Array<Foro>
  constructor(
    private _foroService:ForoService
  ) { }

  ngOnInit() {
    this._foroService.getForos().subscribe(
      res=>{
        console.log(res.foros)
        this.foros = res.foros
      },
      err=>{
        console.log(err);
        
    })
  }

}
