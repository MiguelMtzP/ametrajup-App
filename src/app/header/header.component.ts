import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public miVariable:String
  constructor() { 
    this.miVariable = "¿Quienes somos?"
  }

  ngOnInit() {
  }

}
