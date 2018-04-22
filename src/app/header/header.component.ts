import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { AuthServiceService } from "../services/auth-service.service";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[AuthServiceService]
})
export class HeaderComponent implements OnInit {

  public idioma :string

  constructor(
    private _authServise: AuthServiceService,
    private translate: TranslateService
   ) { 
     this.idioma = "es"
    this.translate.setDefaultLang("es")
  }

  switchLanguage(language: string) {
    this.idioma= language
    this.translate.use(language);
    
  }

  ngOnInit() {
    
  }

}
